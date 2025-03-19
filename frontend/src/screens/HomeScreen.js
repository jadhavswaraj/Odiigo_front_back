import React from 'react';
import {View, Text, Button} from 'react-native';
import {removeToken} from '../utils/auth';

const HomeScreen = ({navigation}) => {
  const handleLogout = async () => {
    await removeToken();
    navigation.replace('Login');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
