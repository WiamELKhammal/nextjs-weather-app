import { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/fetchWeather';
import { getWeatherIconPath } from '../utils/weatherIcons';

const cities = ['Rabat', 'Casablanca', 'Marrakesh', 'Tangier'];

export default function Cities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const results = await Promise.all(
        cities.map(async (city) => {
          try {
            const weather = await fetchWeather(city);
            const icon = getWeatherIconPath(weather.list[0].weather[0].description);
            const temp = Math.round(weather.list[0].main.temp);
            const time = new Date(weather.list[0].dt_txt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            });
            return { city, icon, temp, time };
          } catch (e) {
            return { city, error: true };
          }
        })
      );
      setData(results);
    }

    load();
  }, []);

  return (
    <div className="grid gap-4 p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-2xl px-4 py-3 flex justify-between items-center shadow-md"
        >
          <div className="flex items-center space-x-4">
            <img src={item.icon} alt="icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold">{item.city}</p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
          <p className="text-xl font-bold">{item.temp}°</p>
        </div>
      ))}
    </div>
  );
}
