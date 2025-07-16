import { getWeatherIconPath } from '../utils/weatherIcons';

export default function DailyForecast({ list }) {
  const daily = [];

  const grouped = list.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  for (const [date, values] of Object.entries(grouped).slice(0, 7)) {
    const temps = values.map(v => v.main.temp);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    const icon = getWeatherIconPath(values[0].weather[0].description);
    const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });

    daily.push({ day: dayName, min: Math.round(min), max: Math.round(max), icon });
  }

  return (
    <div className="bg-white text-black p-4 rounded-2xl shadow-md">
      <h3 className="text-sm text-gray-600 font-semibold mb-4 uppercase">7-Day Forecast</h3>
      <div className="space-y-3 divide-y divide-gray-200">
        {daily.map((d, i) => (
          <div key={i} className="flex justify-between items-center py-2">
            <span className="text-sm text-gray-700">{d.day}</span>
            <img src={d.icon} className="w-6 h-6" alt="weather icon" />
            <span className="text-sm font-semibold text-gray-900">{d.max} / {d.min}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
}
