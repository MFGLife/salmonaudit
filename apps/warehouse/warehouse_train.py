import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import os
import cv2
import numpy as np

# Configuration
IMG_SIZE = (64, 64)  # Smaller images for simple shapes
BATCH_SIZE = 32
EPOCHS = 15
TRAIN_DIR = 'warehouse_pics'
MODEL_PATH = 'models/warehouse_model.h5'

# Create directories if they don't exist
os.makedirs(TRAIN_DIR, exist_ok=True)
os.makedirs(os.path.join(TRAIN_DIR, 'empty'), exist_ok=True)
os.makedirs(os.path.join(TRAIN_DIR, 'red'), exist_ok=True)
os.makedirs(os.path.join(TRAIN_DIR, 'green'), exist_ok=True)

# Data augmentation
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=5,  # Small rotation for slight camera angle variations
    width_shift_range=0.05,
    height_shift_range=0.05,
    brightness_range=[0.9, 1.1],  # Account for lighting changes
    validation_split=0.2
)

# Load images
train_generator = train_datagen.flow_from_directory(
    TRAIN_DIR,
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='training',
    color_mode='rgb'
)

validation_generator = train_datagen.flow_from_directory(
    TRAIN_DIR,
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='validation',
    color_mode='rgb'
)

# Simplified CNN model for color/shape recognition
model = models.Sequential([
    layers.Conv2D(16, (3, 3), activation='relu', input_shape=(IMG_SIZE[0], IMG_SIZE[1], 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(32, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(32, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(32, activation='relu'),
    layers.Dense(3, activation='softmax')  # 3 classes: empty, red, green
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // BATCH_SIZE,
    epochs=EPOCHS,
    validation_data=validation_generator,
    validation_steps=validation_generator.samples // BATCH_SIZE
)

# Save the model
os.makedirs('models', exist_ok=True)
model.save(MODEL_PATH)
print(f"Model saved to {MODEL_PATH}")