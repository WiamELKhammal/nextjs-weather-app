import {
  FaCloudSun,
  FaListUl,
  FaMapMarkedAlt,
  FaSlidersH,
} from 'react-icons/fa';

const navItems = [
  { label: 'Weather', icon: FaCloudSun },
  { label: 'Cities', icon: FaListUl },
  { label: 'Map', icon: FaMapMarkedAlt },
  { label: 'Settings', icon: FaSlidersH },
];

export default function Sidebar({ active = 'Weather', onSelect }) {
  return (
    <aside className="h-screen w-[80px] bg-[#111827] flex flex-col items-center py-6 rounded-tr-3xl rounded-br-3xl shadow-lg">
      {/* Logo / Top Icon */}
      <div className="mb-10">
        <img src="/icons/weather-icon.png" alt="Logo" className="w-8 h-8" />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-8">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className={`flex flex-col items-center group focus:outline-none transition ${
              active === label ? 'text-white' : 'text-gray-400'
            }`}
          >
            <Icon
              className={`text-xl mb-1 ${
                active === label
                  ? 'text-blue-400'
                  : 'group-hover:text-white transition'
              }`}
            />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
