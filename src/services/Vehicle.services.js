import { AsyncStorage } from '@react-native-community/async-storage'

const token = 'asdasd'//`Bearer ${AsyncStorage.getItem('jwt_token')}`
const HOST_API = 'http://10.0.3.2:3333'

export async function index() {
  console.log(HOST_API)
  const response = await fetch(`${HOST_API}/cars`, {
    method: 'GET'
  })
  const responseJson = await response.json()

  return responseJson.cars
}

export async function store(vehicle) {
  const response = await fetch(`${HOST_API}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehicle)
  });

  await response.json();
}


export async function show(id) {
  const response = await fetch(`${HOST_API}/cars/${id}`, {
    method: 'GET'
  });

  return await response.json();
}

export async function update(vehicle) {
  const response = await fetch(`${HOST_API}/cars/${vehicle.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehicle)
  });

  return await response.json();
}

export async function destroy(id) {
  const response = await fetch(`${HOST_API}/cars/${id}`, {
    method: 'DELETE'
  });

  return await response.json();
}
