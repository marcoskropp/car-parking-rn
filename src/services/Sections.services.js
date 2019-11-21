import { AsyncStorage } from '@react-native-community/async-storage'

const token = 'asdasd'//`Bearer ${AsyncStorage.getItem('jwt_token')}`
const HOST_API = 'http://10.0.3.2:3333'

export async function index() {
  const response = await fetch(`${HOST_API}/sections`, {
    method: 'GET'
  })

  const responseJson = await response.json()

  return responseJson.sections
}

export async function store(section) {
  await fetch(`${HOST_API}/sections`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(section)
  })
}

export async function update(section) {
  await fetch(`${HOST_API}/sections/${section.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(section)
  })
}