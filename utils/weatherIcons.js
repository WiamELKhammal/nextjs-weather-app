export function getWeatherIconPath(description) {
  const d = description.toLowerCase();

  if (d.includes('clear')) return '/icons/clear.png';
  if (d.includes('few')) return '/icons/few-clouds.png';
  if (d.includes('cloud')) return '/icons/clouds.png';
  if (d.includes('rain') || d.includes('drizzle')) return '/icons/weather/rain.png';
  if (d.includes('thunder')) return '/icons/thunderstorm.png';
  if (d.includes('snow')) return '/icons/snow.png';
  if (d.includes('mist') || d.includes('fog') || d.includes('haze')) return '/icons/weather/mist.png';

  return '/icons/clear.png';
}
