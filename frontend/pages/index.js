import { useState } from "react";

export default function Home() {
  const [surface, setSurface] = useState(50);
  const [price, setPrice] = useState(null);

  const handlePredict = async () => {
    const res = await fetch(`/api/predict?surface=${surface}`);
    const data = await res.json();
    setPrice(data.price);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 40 }}>
      <h1>Prediction prix</h1>
      <input
        type="number"
        value={surface}
        onChange={(e) => setSurface(e.target.value)}
        style={{ width: "100%", marginBottom: 16 }}
      />
      <button onClick={handlePredict} style={{ width: "100%" }}>
        Predict
      </button>
      {price && <p style={{ marginTop: 24 }}>Prix estimé : {price} €</p>}
    </div>
  );
}
