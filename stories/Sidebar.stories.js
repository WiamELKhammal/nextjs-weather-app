import Sidebar from '../components/Sidebar';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
};

export const Default = {
  args: {
    active: 'Weather',
  },
};

export const ActiveCities = {
  args: {
    active: 'Cities',
  },
};
