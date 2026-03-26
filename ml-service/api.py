from fastapi import FastAPI
import joblib

app = FastAPI()

model = joblib.load("model.pkl")

@app.get("/predict")
def predict(surface: float):
    prediction = model.predict([[surface]])
    return {"price": prediction[0]}
