import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model

# Load the trained model
model = load_model('models/warehouse_model.h5')

# Warehouse grid configuration
GRID_SIZE = 5  # 5x5 grid
CELL_SIZE = 100  # pixels per cell (adjust based on your camera setup)

# Class labels
CLASSES = ['empty', 'red', 'yellow']
COLORS = {
    'empty': (200, 200, 200),
    'red': (0, 0, 255),
    'yellow': (0, 255, 255)
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
            
            # Extract cell image
            cell_img = frame[y1:y2, x1:x2]
            if cell_img.size == 0:
                continue
                
            # Preprocess for prediction
            resized = cv2.resize(cell_img, (64, 64))
            normalized = resized / 255.0
            input_tensor = np.expand_dims(normalized, axis=0)
            
            # Predict
            predictions = model.predict(input_tensor)
            class_id = np.argmax(predictions[0])
            confidence = np.max(predictions[0])
            class_name = CLASSES[class_id]
            
            # Only consider confident predictions
            if confidence > 0.7:
                grid_status[(row, col)] = class_name
            else:
                grid_status[(row, col)] = 'empty'
                
    return grid_status

def generate_inventory_list(grid_status):
    """Create sorted list of items"""
    yellow_items = []
    red_items = []
    
    for (row, col), status in grid_status.items():
        cell_number = row * GRID_SIZE + col + 1  # 1-based numbering
        if status == 'yellow':
            yellow_items.append(cell_number)
        elif status == 'red':
            red_items.append(cell_number)
    
    # Sort items
    yellow_items.sort()
    red_items.sort()
    
    return yellow_items, red_items

def draw_grid(frame, grid_status, inventory_text):
    """Draw grid and inventory on frame"""
    # Draw grid lines
    for i in range(GRID_SIZE + 1):
        cv2.line(frame, (i * CELL_SIZE, 0), (i * CELL_SIZE, GRID_SIZE * CELL_SIZE), (0, 255, 0), 1)
        cv2.line(frame, (0, i * CELL_SIZE), (GRID_SIZE * CELL_SIZE, i * CELL_SIZE), (0, 255, 0), 1)
    
    # Draw cell numbers and status
    for (row, col), status in grid_status.items():
        x = col * CELL_SIZE + 10
        y = row * CELL_SIZE + 30
        cell_number = row * GRID_SIZE + col + 1
        
        # Draw cell number
        cv2.putText(frame, str(cell_number), (x, y), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
        
        # Draw status indicator
        center_x = col * CELL_SIZE + CELL_SIZE // 2
        center_y = row * CELL_SIZE + CELL_SIZE // 2
        cv2.circle(frame, (center_x, center_y), 20, COLORS[status], -1)
    
    # Draw inventory list
    y_offset = GRID_SIZE * CELL_SIZE + 40
    cv2.putText(frame, "INVENTORY:", (10, y_offset), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    
    cv2.putText(frame, f"Yellow: {inventory_text[0]}", (10, y_offset + 30), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 255), 2)
    
    cv2.putText(frame, f"Red: {inventory_text[1]}", (10, y_offset + 60), 
               cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

# Main loop
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Resize frame to match grid (500x500 for 5x5 grid with 100px cells)
    frame = cv2.resize(frame, (GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE))
    
    # Detect grid cells
    grid_status = detect_grid_cells(frame)
    
    # Generate inventory list
    yellow_items, red_items = generate_inventory_list(grid_status)
    inventory_text = (yellow_items, red_items)
    
    # Draw grid and inventory
    draw_grid(frame, grid_status, inventory_text)
    
    # Display
    cv2.imshow('Warehouse Tracker', frame)
    
    # Print inventory to console (for debugging)
    print(f"Yellow: {yellow_items} | Red: {red_items}")
    
    # Exit on 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()