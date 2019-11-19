import AsyncStorage from '@react-native-community/async-storage'

const { HOST_API } = process.env;

export async function checkAuth() {
  const token = AsyncStorage.getItem('jwt_token')
  const response = await fetch(`${HOST_API}/check`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return await response.json();
}

export async function login(email, password) {
  const token = 'sadwadasd'
  AsyncStorage.setItem('jwt_token', token)
  return {
    error: false,
    message: 'Login success!'
  }

  const response = await fetch(`${HOST_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  if (data) {
    const data = await response.json()

    const { token } = data

    AsyncStorage.setItem('jwt_token', token)
    return {
      error: false,
      message: 'Login success!'
    }
  }

  return {
    error: true,
    message: data[0].message
  };
}

export async function logout() {
  AsyncStorage.clear();
  return
}