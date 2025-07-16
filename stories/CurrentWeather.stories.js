import CurrentWeather from '../components/CurrentWeather';

export default {
  title: 'Weather/CurrentWeather',
  component: CurrentWeather,
};

export const Default = {
  args: {
    city: 'Madrid',
    weather: {
      list: [
        {
          main: { temp: 28 },
          weather: [{ description: 'clear sky' }],
        },
      ],
    },
  },
};
