import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import App from './app';
// import Auth from './auth';
import Main from '../main';

const switchNavigator = createSwitchNavigator(
  {
    Main,
    App,
    // Auth,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(switchNavigator);
