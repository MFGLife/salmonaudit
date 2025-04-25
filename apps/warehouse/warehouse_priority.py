import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model

# Load the trained model
model = load_model('models/warehouse_model.h5')

# Warehouse grid configuration
GRID_SIZE = 5  # 5x5 grid
CELL_SIZE = 100  # pixels per cell (adjust based on your camera setup)

# Priority colors
COLORS = {
    'empty': (200, 200, 200),  # Gray
    'red': (0, 0, 255),         # Red (low priority)
    'green': (0, 255, 0),       # Green (high priority)
    'number': (255, 255, 255)   # White for numbers
}

def detect_grid_cells(frame):
    """Process each cell in the grid and return status"""
    grid_status = {}
    
    for row in range(GRID_SIZE):
        for col in range(GRID_SIZE):
            # Calculate cell coordinates
            x1 = col * CELL_SIZE
            y1 = row * CELL_SIZE
            x2 = x1 + CELL_SIZE
            y2 = y1 + CELL_SIZE
            
            # Extract cell image (focus on center area to avoid edge artifacts)
            margin = int(CELL_SIZE * 0.2)
            cell_img = frame[y1+margin:y2-margin, x1+margin:x2-margin]
            
            if cell_img.size == 0:
                grid_status[(row, col)] = {'priority': 'empty', 'number': row * GRID_SIZE + col + 1}
                continue
                
            # Preprocess for prediction
            resized = cv2.resize(cell_img, (64, 64))
            normalized = resized / 255.0
            input_tensor = np.expand_dims(normalized, axis=0)
            
            # Predict priority marker
            predictions = model.predict(input_tensor)
            class_id = np.argmax(predictions[0])
            confidence = np.max(predictions[0])
            
            # Class names should match your training data
            priority_status = ['empty', 'red', 'green'][class_id] if confidence > 0.7 else 'empty'
            
            # Try to detect the number in the cell (simple OCR would go here)
            # For now we'll just calculate based on position
            cell_number = row * GRID_SIZE + col + 1
            
            grid_status[(row, col)] = {
                'priority': priority_status,
                'number': cell_number
            }
                
    return grid_status

def generate_priority_list(grid_status):
    """Create sorted lists based on priority"""
    high_priority = []  # Green markers
    normal_priority = []  # No marker
    low_priority = []  # Red markers
    
    for cell_data in grid_status.values():
        if cell_data['priority'] == 'green':
            high_priority.append(cell_data['number'])
        elif cell_data['priority'] == 'red':
            low_priority.append(cell_data['number'])
        else:
            normal_priority.append(cell_data['number'])
    
    # Sort each category
    high_priority.sort()
    normal_priority.sort()
    low_priority.sort()
    
    # Combine with priority order: green first, then unmarked, then red
    return high_priority + normal_priority + low_priority

def draw_grid(frame, grid_status, priority_list):
    """Draw grid and priority list on frame"""
    # Draw grid lines
    for i in range(GRID_SIZE + 1):
        cv2.line(frame, (i * CELL_SIZE, 0), (i * CELL_SIZE, GRID_SIZE * CELL_SIZE), (0, 255, 0), 1)
        cv2.line(frame, (0, i * CELL_SIZE), (GRID_SIZE * CELL_SIZE, i * CELL_SIZE), (0, 255, 0), 1)
    
    # Draw cell contents
    for (row, col), data in grid_status.items():
        center_x = col * CELL_SIZE + CELL_SIZE // 2
        center_y = row * CELL_SIZE + CELL_SIZE // 2
        
        # Draw priority indicator (circle in center)
        cv2.circle(frame, (center_x, center_y), 20, COLORS[data['priority']], -1)
        
        # Draw cell number (top left corner)
        cv2.putText(frame, str(data['number']), 
                   (col * CELL_SIZE + 10, row * CELL_SIZE + 30), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.7, COLORS['number'], 2)
    
    # Draw priority list
    y_offset = GRID_SIZE * CELL_SIZE + 40
    cv2.putText(frame, "PRIORITY ORDER:", (10, y_offset), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    
    # Display first 10 items
    display_text = ", ".join(map(str, priority_list[:10]))
    if len(priority_list) > 10:
        display_text += ", ..."
    
    cv2.putText(frame, display_text, (10, y_offset + 30), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    
    # Count by priority
    cv2.putText(frame, f"High (Green): {len(high_priority)}", (10, y_offset + 60), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.6, COLORS['green'], 1)
    cv2.putText(frame, f"Normal: {len(normal_priority)}", (10, y_offset + 90), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.6, COLORS['empty'], 1)
    cv2.putText(frame, f"Low (Red): {len(low_priority)}", (10, y_offset + 120), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.6, COLORS['red'], 1)

# Main loop
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Resize frame to match grid
    frame = cv2.resize(frame, (GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE))
    
    # Detect grid cells
    grid_status = detect_grid_cells(frame)
    
    # Generate priority list
    priority_list = generate_priority_list(grid_status)
    high_priority = [num for num, data in grid_status.items() if data['priority'] == 'green']
    normal_priority = [num for num, data in grid_status.items() if data['priority'] == 'empty']
    low_priority = [num for num, data in grid_status.items() if data['priority'] == 'red']
    
    # Draw grid and priority list
    draw_grid(frame, grid_status, priority_list)
    
    # Display
    cv2.imshow('Warehouse Priority Tracker', frame)
    
    # Print priority list to console
    print("Current Priority Order:", priority_list)
    
    # Exit on 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()