import AsyncStorage from '@react-native-async-storage/async-storage';

export const setObjectValue = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('error setObjectValue ', e);
  }
  console.log('Done.');
};

export const setStringValue = async (value, key) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('error setStringValue ', e);
  }
  console.log('Done.');
};

export const getMyObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error getMyObject ', e);
    return null;
  }
};

export const getMyStringValue = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log('error getMyStringValue ', e);
    return null;
  }
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};
