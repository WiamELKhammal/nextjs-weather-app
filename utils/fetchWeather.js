export async function fetchWeather(city) {
  const res = await fetch(`/api/weather?city=${city}`);
  if (!res.ok) throw new Error('Error fetching weather');
  return res.json();
}
