import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../scenes/Home';
import Search from '../scenes/Search';

export const SCREENS = {
  Home: 'Home',
  Search: 'Search',
};

export const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      [SCREENS.Home]: Home,
      [SCREENS.Search]: Search,
    },
    {
      headerMode: 'none',
    },
  ),
);

export default AppNavigator;
