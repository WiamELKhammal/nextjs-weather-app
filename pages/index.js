import { useState, useEffect } from 'react';
import { fetchWeather } from '../utils/fetchWeather';
import CurrentWeather from '../components/CurrentWeather';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import AirConditions from '../components/AirConditions';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import Cities from '../components/Cities';

export default function Home() {
  const [city, setCity] = useState('Rabat'); // Default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('Weather'); // ✅ Navigation tab

  useEffect(() => {
    handleSearch(city); // Load Rabat on load
  }, []);

  const handleSearch = async (searchCity) => {
    try {
      setError('');
      const data = await fetchWeather(searchCity);
      setWeather(data);
      setCity(searchCity);
    } catch (err) {
      setError('City not found or API error');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar active={activeTab} onSelect={setActiveTab} />
      <main className="flex-1 p-6">
        {activeTab === 'Weather' && (
          <>
            <SearchBar onSearch={handleSearch} />
            {error && <p className="text-red-400 mt-4">{error}</p>}
            {weather && (
              <>
                <CurrentWeather city={city} weather={weather} />
                <HourlyForecast list={weather.list.slice(0, 6)} />
                <AirConditions list={weather.list[0]} />
                <DailyForecast list={weather.list} />
              </>
            )}
          </>
        )}

{activeTab === 'Cities' && (
  <>
    <SearchBar onSearch={handleSearch} />
    <Cities selectedCity={city} onSelectCity={handleSearch} />
  </>
)}
        {activeTab === 'Map' && <p className="text-xl">Map integration coming soon...</p>}
        {activeTab === 'Settings' && <p className="text-xl">Settings panel coming soon...</p>}
      </main>
    </div>
  );
}
