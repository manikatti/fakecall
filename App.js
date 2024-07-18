import * as React from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  AsyncStorage
} from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppStack from "./src/router/AppStack";
import ConfigureStore from './src/Redux/ConfigureStore'
import { Provider } from 'react-redux';
import { ResWidth, ResHeight, ResFontSizes } from "./src/utilis"


class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    this._bootstrapAsync();
  }




  _bootstrapAsync = async () => {

    setTimeout(
      () => {        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate('App');

      },
      3 * 1000
    );

  }

  // Render any loading content that you like here
  render() {
    return (
      <ImageBackground source={require("./assets/img/splash.png")} style={styles.container}>
        <StatusBar hidden />
        <Image style={{
          width: ResWidth(60),
          height: ResWidth(60),
          borderRadius: ResWidth(60)
        }}
          source={require("./assets/img/logo.png")} />
        <ActivityIndicator />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Main = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,

  },
  {
    initialRouteName: 'AuthLoading',
  }
));


class Apps extends React.Component {
  render() {
    return (
      <Provider store={ConfigureStore} >
        <StatusBar hidden />
        <Main />
      </Provider>
    )
  }
}
export default Apps;
