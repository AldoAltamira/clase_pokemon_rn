import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';
import {View, Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

Icon.loadFont();

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;