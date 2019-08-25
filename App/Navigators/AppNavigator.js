import React from 'react'
import { Text, View } from 'react-native';
import { createAppContainer, createStackNavigator} from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import SplashScreen from '../Containers/SplashScreen'
import QuestionTypesScreen from '../Containers/QuestionTypesScreen'
import ResultScreen from '../Containers/ResultScreen'
import QuestionScreen from '../Containers/QuestionScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StartUpStackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    Splash:{
      screen:SplashScreen,
      navigationOptions:({navigation})=>({
          header:null
      })
    },
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    Login: {
      screen:LoginScreen,
      navigationOptions:({navigation})=>({
          header:null
      })
    },
    QuestionTypes: {
      screen:QuestionTypesScreen,
      navigationOptions:({navigation})=>({
          header:null
      })
    },
    Questions : {
      screen:QuestionScreen
    },
    Results:{
      screen:ResultScreen,
    }

  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'Login',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerLayoutPreset: 'center'
  }
)

export default createAppContainer(StartUpStackNavigator);
