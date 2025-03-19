import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {verifyOTP} from '../services/api';
import {storeToken} from '../utils/auth';

const OTPScreen = ({route, navigation}) => {
  const {mobile} = route.params;
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    try {
      const response = await verifyOTP(mobile, otp);
      await storeToken(response.accessToken, response.refreshToken);
      navigation.replace('Home');
    } catch (err) {
      setError('Invalid OTP. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter OTP sent to +91{mobile}</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={6}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  input: {borderWidth: 1, padding: 10, marginVertical: 10},
  error: {color: 'red'},
});

export default OTPScreen;
