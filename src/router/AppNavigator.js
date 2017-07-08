import { StackNavigator } from 'react-navigation';
import * as HomeScreens from '../screens/HomeScreens';
import * as LoginScreens from '../screens/LoginScreens';

const AppNavigator = StackNavigator(
  {
    Login: {
      screen: LoginScreens.Login
    },
    ForgotPassword: {
      screen: LoginScreens.ForgotPassword
    },
    CreateAccount: {
      screen: LoginScreens.CreateAccount
    },
    Home: {
      screen: HomeScreens.Home,
      navigationOptions: {
        title: "Home"
      }
    },
    AppleMaps: {
      screen: HomeScreens.AppleMaps,
      navigationOptions: {
        title: "AppleMaps"
      }
    },
    GoogleMaps: {
      screen: HomeScreens.GoogleMaps,
      navigationOptions: {
        title: "GoogleMaps"
      }
    },
    Facebook: {
      screen: HomeScreens.Facebook,
      navigationOptions: {
        title: "Facebook"
      }
    },
  },
);

export default AppNavigator;
