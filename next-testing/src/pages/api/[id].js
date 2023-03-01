export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(`http://localhost:3000/api/accounts/${id}`);

  res.status(200).json(response);
}
