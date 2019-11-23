import AsyncStorage from '@react-native-community/async-storage';

const HOST_API = 'http://10.0.3.2:3333';

export async function checkAuth() {
  const token = AsyncStorage.getItem('jwt_token');
  const response = await fetch(`${HOST_API}/check`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

export async function login(email, password) {
  const response = await fetch(`${HOST_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  });

  const data = await response.json();
  const {token} = data;

  if (token) {
    AsyncStorage.setItem('jwt_token', token);

    return {
      error: false,
      message: 'Login success!',
    };
  }

  return {
    error: true,
    message: data[0].message,
  };
}

export async function logout() {
  AsyncStorage.clear();
  return;
}
