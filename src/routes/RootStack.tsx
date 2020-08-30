import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProgrammingAssignment from '../index';
import UserDetails from '../screens/UserDetails';

const screens = {
  Root: {
    screen: ProgrammingAssignment
  },
  UserDetails: {
    screen: UserDetails
  }
}

const RootStack = createStackNavigator(screens);

export default createAppContainer(RootStack);
