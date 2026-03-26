from sklearn.linear_model import LinearRegression
import numpy as np
import joblib

# dataset simple
X = np.array([[50], [60], [70], [80]])  # surface
y = np.array([150000, 180000, 210000, 250000])  # prix

model = LinearRegression()
model.fit(X, y)

# sauvegarde du modèle
joblib.dump(model, "model.pkl")

print("Model trained and saved!")
