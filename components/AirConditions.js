import { WiThermometer, WiStrongWind, WiRaindrop, WiDaySunny } from 'react-icons/wi';

export default function AirConditions({ list }) {
  const { feels_like, humidity } = list.main;
  const { speed } = list.wind;

  return (
    <div className="bg-white text-black p-4 rounded-2xl mb-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm text-gray-600 font-semibold uppercase">Air Conditions</h3>
 
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <WiThermometer className="text-xl text-gray-600" />
          <div>
            <p className="text-gray-500">Real Feel</p>
            <p className="text-lg font-bold">{Math.round(feels_like)}°</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <WiStrongWind className="text-xl text-gray-600" />
          <div>
            <p className="text-gray-500">Wind</p>
            <p className="text-lg font-bold">{speed} km/h</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <WiRaindrop className="text-xl text-gray-600" />
          <div>
            <p className="text-gray-500">Chance of rain</p>
            <p className="text-lg font-bold">0%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <WiDaySunny className="text-xl text-gray-600" />
          <div>
            <p className="text-gray-500">UV Index</p>
            <p className="text-lg font-bold">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
