export default async function handler(req, res) {
  const { surface } = req.query;
  const backendUrl = process.env.BACKEND_URL || "http://localhost:3001";
  const response = await fetch(`${backendUrl}/predict?surface=${surface}`);
  const data = await response.json();
  res.status(200).json(data);
}
