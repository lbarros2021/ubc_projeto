import axios from 'axios';

export const login = (username, password) => async dispatch => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const { data } = await axios.post('https://localhost:7064/api/auth/login', { username, password });
    const token = data.token;

    dispatch({ type: 'LOGIN_SUCCESS', payload: token });
    localStorage.setItem('token', token);
  } catch (error) {
    let errorMessage = 'An error occurred. Please try again.';
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = 'Incorrect username or password.';
      } else if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
    } else {
      errorMessage = error.message;
    }
    dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
