const baseURL = 'http://localhost:3000/api/guests/'

export default {
  getGuests() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postGuest(payload){
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json"}
    })
    .then(res => res.json())
  },

  updateGuest(id, guest) {
    return fetch(baseURL + id, {
      method: "PATCH",
      body: JSON.stringify(guest),
      headers: { "Content-Type": "application/json"}

    })
    .then(res => res.json)
  },

  deleteGuest(id) {
    return fetch(baseURL + id, {
      method: "DELETE"
    })

  }
}
