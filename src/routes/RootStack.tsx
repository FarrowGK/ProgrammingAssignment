import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProgrammingAssignment from '../index';
import UserDetails from '../screens/UserDetails';

const screens = {
  Root: {
    screen: ProgrammingAssignment,
    navigationOptions: {
      headerTitle: 'List of Avaible Users',
      headerStyle: {
            backgroundColor: '#195e83',
          },
    }
  },
  UserDetails: {
    screen: UserDetails,
    navigationOptions: {
      headerTitle: 'User Details',
      headerStyle: {
            backgroundColor: '#195e83',
          },
    }
  }
}

const RootStack = createStackNavigator(screens);

export default createAppContainer(RootStack);
