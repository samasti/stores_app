---
---
window.storage = {

  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    return value
  },

  get: (key) => {
    var value = localStorage.getItem(key)
    if (!value) return
    return JSON.parse(value)
  },

}

