// pages/api/weather.js
export default async function handler(req, res) {
  const { city } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await weatherRes.json();

    if (data.cod !== '200') {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch weather' });
  }
}
