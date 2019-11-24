import { AsyncStorage } from '@react-native-community/async-storage'

const token = 'asdasd'//`Bearer ${AsyncStorage.getItem('jwt_token')}`
const HOST_API = 'http://10.0.3.2:3333'

export async function index() {
  const response = await fetch(`${HOST_API}/people`, {
    method: 'GET'
  })

  const responseJson = await response.json()

  return responseJson.people
}

export async function store(person) {
  await fetch(`${HOST_API}/people`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  })
}


export async function show(id) {
  const response = await fetch(`${HOST_API}/people/${id}`, {
    method: 'GET'
  })

  const responseJson = await response.json()

  return responseJson.person
}

export async function update(person) {
  console.log(person)
  const response = await fetch(`${HOST_API}/people/${person.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  })

  return await response.json();
}

export async function destroy(id) {
  const response = await fetch(`${HOST_API}/people/${id}`, {
    method: 'DELETE'
  });

  return await response.json();
}
