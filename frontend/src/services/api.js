import axios from 'axios';

const API_URL = 'http://10.20.21.235:3000/auth'; // Matches backend port

export const sendOTP = async phone => {
  const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
  try {
    const response = await axios.post(`${API_URL}/send-otp`, {
      phone: formattedPhone,
    });
    console.log('Send OTP Success:', response.data); // Log success
    return response.data;
  } catch (error) {
    console.log('Send OTP Error:', error.message, error.response?.data); // Log error
    throw error;
  }
};

export const verifyOTP = async (phone, otp) => {
  const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
  const response = await axios.post(`${API_URL}/verify-otp`, {
    phone: formattedPhone,
    otp,
  });
  return response.data;
};

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/auth'; // Use your computer's IP if testing on a real device

// export const sendOTP = async phone => {
//   const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
//   const response = await axios.post(`${API_URL}/send-otp`, {
//     phone: formattedPhone,
//   });
//   return response.data;
// };

// export const verifyOTP = async (phone, otp) => {
//   const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
//   const response = await axios.post(`${API_URL}/verify-otp`, {
//     phone: formattedPhone,
//     otp,
//   });
//   return response.data;
// };
