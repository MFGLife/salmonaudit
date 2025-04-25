import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model

# Load the trained model
model = load_model('models/sunflower_model.h5')

# Open camera
cap = cv2.VideoCapture(0)  # Use 0 for default camera, or URL for IP camera

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Preprocess the frame for prediction
    resized = cv2.resize(frame, (224, 224))
    normalized = resized / 255.0
    input_tensor = np.expand_dims(normalized, axis=0)
    
    # Make prediction
    prediction = model.predict(input_tensor)
    health_status = "Healthy" if prediction[0][0] < 0.5 else "Needs Help"
    confidence = 1 - prediction[0][0] if health_status == "Healthy" else prediction[0][0]
    
    # Draw bounding box with color based on health
    box_color = (0, 255, 0) if health_status == "Healthy" else (0, 0, 255)
    cv2.rectangle(frame, (50, 50), (frame.shape[1]-50, frame.shape[0]-50), box_color, 2)
    
    # Display status text
    status_text = f"{health_status} ({confidence:.2f})"
    cv2.putText(frame, status_text, (50, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, box_color, 2)
    
    # Show the frame
    cv2.imshow('Sunflower Health Monitor', frame)
    
    # Exit on 'q' key
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()