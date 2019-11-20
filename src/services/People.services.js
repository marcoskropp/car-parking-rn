import { AsyncStorage } from '@react-native-community/async-storage'

const token = 'asdasd'//`Bearer ${AsyncStorage.getItem('jwt_token')}`
const HOST_API = 'http://localhost:3333'

export async function index() {
  console.log(HOST_API)
  const response = await fetch(`${HOST_API}/people`, {
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

export async function store(person) {
  const response = await fetch(`${HOST_API}/people`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  });

  await response.json();
}


export async function show(id) {
  const response = await fetch(`${HOST_API}/people/${id}`, {
    method: 'GET'
  });

  return await response.json();
}

export async function update(person) {
  const response = await fetch(`${HOST_API}/people/${person.id}`, {
    method: 'PUT',
    body: JSON.stringify(person)
  });

  return await response.json();
}

export async function destroy(id) {
  const response = await fetch(`${HOST_API}/people/${id}`, {
    method: 'DELETE'
  });

  return await response.json();
}
