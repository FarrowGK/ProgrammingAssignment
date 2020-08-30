import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProgrammingAssignment from '../index';
import UserDetails from '../screens/UserDetails';

const screens = {
  Root: {
    screen: ProgrammingAssignment,
    navigationOptions: {
      headerTitle: 'List of Avaible Users'
    }
  },
  UserDetails: {
    screen: UserDetails,
    navigationOptions: {
      headerTitle: 'User Details'
    }
  }
}

const RootStack = createStackNavigator(screens);

export default createAppContainer(RootStack);
