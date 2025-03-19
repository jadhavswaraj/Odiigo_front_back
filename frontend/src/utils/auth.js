import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const EXPIRY_KEY = 'token_expiry';

// Store tokens with 15-day expiration
export const storeToken = async (accessToken, refreshToken) => {
  const expiry = Date.now() + 15 * 24 * 60 * 60 * 1000; // 15 days in milliseconds
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  await AsyncStorage.setItem(EXPIRY_KEY, expiry.toString());
};

// Check if refresh token is valid (not expired)
export const checkTokenValidity = async () => {
  const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
  const expiry = await AsyncStorage.getItem(EXPIRY_KEY);
  if (!refreshToken || !expiry) return false;
  return Date.now() < parseInt(expiry);
};

// Get tokens
export const getTokens = async () => {
  const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
  const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
  return {accessToken, refreshToken};
};

// Remove tokens on logout
export const removeToken = async () => {
  await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
  await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
  await AsyncStorage.removeItem(EXPIRY_KEY);
};
