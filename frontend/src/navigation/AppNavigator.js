import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = ({isLoggedIn}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;

// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import LoginScreen from '../screens/LoginScreen';
// import OTPScreen from '../screens/OTPScreen';
// import HomeScreen from '../screens/HomeScreen';

// const Stack = createStackNavigator();

// const AppNavigator = ({isLoggedIn}) => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       {isLoggedIn ? (
//         <Stack.Screen name="Home" component={HomeScreen} />
//       ) : (
//         <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="OTP" component={OTPScreen} />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
