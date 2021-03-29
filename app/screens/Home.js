import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../style';
import {removeValue, getMyObject} from '../utils/Async';
import DispatchEvents from '../utils/Dispatchs';
import Colors from '../style/Colors';

let Home = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  const {logout} = DispatchEvents();

  const getUser = async () => {
    getMyObject('User')
      .then((user) => {
        console.log('userrr', user);
        if (user) {
          setEmail(user.username);
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const logoutPress = () => {
    setDisabled(true);
    logout();
    removeValue('User');
    navigation.navigate('Login');
    setDisabled(false);
  };

  return (
    <View style={[styles.containerCenter, styles.centerDiv]}>
      <Text>Bienvenido {email}</Text>
       <Button
        title="Cerrar sesión"
        onPress={logoutPress}
        disabled={disabled}
        buttonStyle={styles.buttonLogin}
        loading={disabled}
        loadingProps={{
          color: Colors.blue,
          size: 'large',
        }}
      />
    </View>
  );
};

export default Home;
