import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  return (
    <div className="flex items-center space-x-4 mb-6">
      <input
        type="text"
        placeholder="Search for cities"
        className="bg-gray-800 text-white px-4 py-2 rounded w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 px-4 py-2 rounded"
        onClick={() => onSearch(input)}
      >
        Search
      </button>
    </div>
  );
}
