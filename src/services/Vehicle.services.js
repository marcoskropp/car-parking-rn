import { AsyncStorage } from '@react-native-community/async-storage'

const token = 'asdasd'//`Bearer ${AsyncStorage.getItem('jwt_token')}`
const HOST_API = 'http://localhost:3333'

export async function index() {
  console.log(HOST_API)
  const response = await fetch(`${HOST_API}/cars`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    /*headers: {
      Authorization: token
    }*/
  })

  return await response.json()
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
  const response = await fetch(`${HOST_API}/cars/${person.id}`, {
    method: 'PUT',
    body: JSON.stringify(vechicle)
  });

  return await response.json();
}

export async function destroy(id) {
  const response = await fetch(`${HOST_API}/cars/${id}`, {
    method: 'DELETE'
  });

  return await response.json();
}
