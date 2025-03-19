import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {sendOTP} from '../services/api';

const LoginScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [isPressed, setIsPressed] = useState(false);

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
      <Text style={styles.title}>Welcome to Odiigo</Text>
      <Text style={styles.subtitle}>
        Enter your mobile number to get started
      </Text>

      <TextInput
        style={styles.input}
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
        maxLength={10}
        placeholder="e.g., 9876543210"
        placeholderTextColor="#9CA3AF"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2937', // Darker background (cool dark gray)
    padding: 20,
  },
  title: {
    fontSize: 28,
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
    backgroundColor: '#4338CA', // Slightly darker on press
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

export default LoginScreen;

// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
// import {sendOTP} from '../services/api';

// const LoginScreen = ({navigation}) => {
//   const [mobile, setMobile] = useState('');
//   const [error, setError] = useState('');

//   const handleSendOTP = async () => {
//     if (!mobile || mobile.length < 10) {
//       setError('Please enter a valid 10-digit mobile number');
//       return;
//     }
//     try {
//       await sendOTP(mobile);
//       navigation.navigate('OTP', {mobile});
//     } catch (err) {
//       setError('Failed to send OTP. Try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Enter Mobile Number</Text>
//       <TextInput
//         style={styles.input}
//         value={mobile}
//         onChangeText={setMobile}
//         keyboardType="phone-pad"
//         maxLength={10}
//         placeholder="e.g., 9876543210"
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Send OTP" onPress={handleSendOTP} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', padding: 20},
//   input: {borderWidth: 1, padding: 10, marginVertical: 10},
//   error: {color: 'red'},
// });

// export default LoginScreen;
