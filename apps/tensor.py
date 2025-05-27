import os
import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models
from sklearn.model_selection import train_test_split

# --- Step 1: Generate Synthetic Data (or load your own) ---
# For demo, we create random spectrograms as if from audio or RF signals
# Replace this with your real data if available

num_samples = 1000
num_features = 256  # Must match your model input shape
num_classes = 10    # Number of device classes, change as needed

# Create random spectrograms and labels
X = np.random.rand(num_samples, num_features, 1).astype(np.float32)
y = np.random.randint(0, num_classes, num_samples)

# Split data into train/test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# --- Step 2: Define and Train the Model ---
input_shape = (num_features, 1)
model = models.Sequential([
    layers.InputLayer(input_shape=input_shape),
    layers.Conv1D(32, 3, activation='relu'),
    layers.MaxPooling1D(2),
    layers.Conv1D(64, 3, activation='relu'),
    layers.MaxPooling1D(2),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(num_classes, activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.summary()

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# --- Step 3: Convert to TensorFlow Lite ---
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

# Save the model
with open('fingerprint_model.tflite', 'wb') as f:
    f.write(tflite_model)

print("Model saved as fingerprint_model.tflite")

# --- Optional: Test the TFLite Model ---
interpreter = tf.lite.Interpreter(model_content=tflite_model)
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Test with a sample
test_sample = X_test[0:1]
interpreter.set_tensor(input_details[0]['index'], test_sample)
interpreter.invoke()
output = interpreter.get_tensor(output_details[0]['index'])
print("Model output for sample:", output)
