const HOST_API = 'http://10.0.3.2:3333'

export async function store(parking) {
  await fetch(`${HOST_API}/parkings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parking)
  })
}

export async function destroy(id) {
  await fetch(`${HOST_API}/parkings/${id}`, {
    method: 'DELETE'
  })
}
