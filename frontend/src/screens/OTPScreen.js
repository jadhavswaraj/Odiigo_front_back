import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
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
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>OTP sent to +91 {mobile}</Text>

      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={6}
        placeholder="Enter 6-digit OTP"
        placeholderTextColor="#9CA3AF"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2937', // same dark gray background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#111827',
    color: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: '#4338CA', // darker on press
    transform: [{scale: 0.98}],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default OTPScreen;

// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
// import {verifyOTP} from '../services/api';
// import {storeToken} from '../utils/auth';

// const OTPScreen = ({route, navigation}) => {
//   const {mobile} = route.params;
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');

//   const handleVerifyOTP = async () => {
//     if (!otp || otp.length !== 6) {
//       setError('Please enter a valid 6-digit OTP');
//       return;
//     }
//     try {
//       const response = await verifyOTP(mobile, otp);
//       await storeToken(response.accessToken, response.refreshToken);
//       navigation.replace('Home');
//     } catch (err) {
//       setError('Invalid OTP. Try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Enter OTP sent to +91{mobile}</Text>
//       <TextInput
//         style={styles.input}
//         value={otp}
//         onChangeText={setOtp}
//         keyboardType="numeric"
//         maxLength={6}
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Verify OTP" onPress={handleVerifyOTP} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', padding: 20},
//   input: {borderWidth: 1, padding: 10, marginVertical: 10},
//   error: {color: 'red'},
// });

// export default OTPScreen;
