import React from 'react'; //  Required for JSX
import { render, screen } from '@testing-library/react';
import CurrentWeather from '../components/CurrentWeather';
import '@testing-library/jest-dom';

const mockData = {
  list: [
    {
      main: { temp: 28 },
      weather: [{ description: 'clear sky' }],
    },
  ],
};

test('displays city and temperature', () => {
  render(<CurrentWeather city="Rabat" weather={mockData} />);
  expect(screen.getByText('Rabat')).toBeInTheDocument();
  expect(screen.getByText('28°')).toBeInTheDocument();
  expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
});
