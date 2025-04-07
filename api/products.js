export default async function handler(req, res) {
  try {
    const response = await fetch("http://3.77.99.127:8083/ck/sales/C01SalesOrderAllProductsView");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from origin API", details: error.message });
  }
}
