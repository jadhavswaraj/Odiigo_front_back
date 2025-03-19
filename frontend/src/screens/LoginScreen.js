import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {sendOTP} from '../services/api';

const LoginScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = async () => {
    if (!mobile || mobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    try {
      await sendOTP(mobile);
      navigation.navigate('OTP', {mobile});
    } catch (err) {
      setError('Failed to send OTP. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter Mobile Number</Text>
      <TextInput
        style={styles.input}
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
        maxLength={10}
        placeholder="e.g., 9876543210"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Send OTP" onPress={handleSendOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  input: {borderWidth: 1, padding: 10, marginVertical: 10},
  error: {color: 'red'},
});

export default LoginScreen;
