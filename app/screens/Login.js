import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import styles from '../style';
import {setObjectValue, getMyObject} from '../utils/Async';
import DispatchEvents from '../utils/Dispatchs';
import Colors from '../style/Colors';

let Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const {login} = DispatchEvents();

  const getUser = async () => {
    getMyObject('User')
      .then((user) => {
        console.log('userrr', user);
        if (user) {
          login(user);
          navigation.navigate('Home');
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const inputs = [
    {
      placeholder: 'Email',
      label: 'Usuario',
      keyboardType: 'email-address',
      secureTextEntry: false,
      value: `${email}`,
      key: 'email',
    },
    {
      placeholder: 'Password',
      label: 'Contraseña',
      keyboardType: 'default',
      secureTextEntry: true,
      value: `${password}`,
      key: 'password',
    },
  ];

  const loginPress = () => {
    setDisabled(true);
    let objPost = {
      username: email.toLowerCase(),
      password: password,
    };
    login(objPost);
    setObjectValue(objPost, 'User');
    navigation.navigate('Home');
    setDisabled(false);
  };

  return (
    <View style={styles.containerCenter}>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.spaceAround}>
            <View style={styles.centerDiv}>
              <View style={styles.whiteSpace120} />
              {inputs.map((e, i) => (
                <Input
                  onChangeText={(value) => {
                    if (e.key === 'email') {
                      setEmail(value);
                    } else {
                      setPassword(value);
                    }
                  }}
                  value={e.value}
                  placeholder={e.placeholder}
                  key={i}
                  label={e.label}
                  inputContainerStyle={styles.inputLogin}
                  containerStyle={styles.width90p}
                  labelStyle={styles.labelInputStyle}
                  keyboardType={e.keyboardType}
                  secureTextEntry={e.secureTextEntry}
                  inputStyle={styles.insideInputLogin}
                />
              ))}
              <View style={styles.whiteSpace40} />
              <Button
                title="Iniciar sesión"
                onPress={loginPress}
                disabled={disabled}
                buttonStyle={styles.buttonLogin}
                loading={disabled}
                loadingProps={{
                  color: Colors.blue,
                  size: 'large',
                }}
              />
              <Button
                title="Olvidé mi contraseña"
                type="clear"
                buttonStyle={styles.marginBottom24}
                titleStyle={styles.buttonTitleForgot}
                onPress={() => navigation.navigate('Forgot')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
