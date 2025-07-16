import { getWeatherIconPath } from '../utils/weatherIcons';

export default function HourlyForecast({ list }) {
  return (
    <div className="bg-white text-black p-4 rounded-2xl mb-6 shadow-md">
      <h3 className="text-sm text-gray-600 font-semibold mb-4 uppercase">Today's Forecast</h3>
      <div className="flex overflow-x-auto divide-x divide-gray-300">
        {list.map((item, index) => {
          const time = new Date(item.dt_txt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          const icon = getWeatherIconPath(item.weather[0].description);
          const temp = Math.round(item.main.temp);
          return (
            <div key={index} className="text-center flex-shrink-0 w-[60px] px-2">
              <p className="text-xs text-gray-500">{time}</p>
              <img src={icon} alt="icon" className="w-10 h-10 mx-auto" />
              <p className="text-sm font-semibold">{temp}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
