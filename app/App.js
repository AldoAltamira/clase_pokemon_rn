import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';
import {View, Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {Provider} from 'react-redux';
import {store} from './store';

Icon.loadFont();

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;