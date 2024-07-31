import axiosInstance from './axiosInstance';

const httpRequest = async (method, url, data = null, token = null) => {
  const fullURL = `${axiosInstance.defaults.baseURL}${url}`;

  const config = {
    method,
    url: fullURL,
    data,
    headers: {}
  };

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  console.log('Full URL:', fullURL);
  console.log('Config:', config);

  try {
    const response = await axiosInstance(config);
    console.log('Response:', response);
    return { success: true, data: response.data };
  } catch (error) {
    console.log('Error message:', error.message);
    return { success: false, message: error.message };
  }
};

export default httpRequest;
