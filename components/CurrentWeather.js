import { getWeatherIconPath } from '../utils/weatherIcons';
import React from 'react';

export default function CurrentWeather({ city, weather }) {
  const { temp } = weather.list[0].main;
  const description = weather.list[0].weather[0].description;
  const icon = getWeatherIconPath(description);

  return (
    <div className="bg-white text-black p-6 rounded-2xl mb-6 shadow-md">
      <h1 className="text-3xl font-semibold">{city}</h1>
      <p className="text-sm text-gray-600 capitalize">Chance of rain: 0%</p>
      <div className="flex items-center mt-4">
        <p className="text-6xl font-bold mr-4">{Math.round(temp)}°</p>
        <img src={icon} alt={description} className="w-20 h-20" />
      </div>
      <p className="capitalize mt-2 text-sm text-gray-700">{description}</p>
    </div>
  );
}
