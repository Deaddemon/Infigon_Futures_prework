import axios, { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

const apiBaseUrl = 'https://dev.api.infigon.app';

// Function to get the access token from localStorage
const getAccessToken = () => {
  return localStorage.getItem('auth');
};


// Function to handle the case when the user is not authenticated
const handleNotAuthenticated = () => {
  const navigate = useNavigate();
  console.error('User not authenticated');
  navigate('/login');
  //window.location.href = '/login';
};

// Function to make authenticated requests
const makeAuthenticatedRequest = async (
  url: string,
  method: string,
  data?: any
): Promise<any> => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    handleNotAuthenticated();
    return Promise.reject('User not authenticated');
  }

  const headers: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios({
      method,
      url: `${apiBaseUrl}/${url}`,
      data,
      ...headers,
    });

    return response.data;
  } 
  catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export default makeAuthenticatedRequest;
