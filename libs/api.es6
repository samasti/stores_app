---
---
window.apiData = {
  profile: 'poda',
  host:    'http://localhost:3000',
}

window.api = {
  baseUrl: `${apiData.host}/profile/${apiData.profile}/plugin/stores_app`,

  catalog: () => {
    return api.get({
      path: `catalog/listing`,
    })
  },

  orders: ({action = 'last'}) => {
    return api.get({
      path: `orders/${action}`,
    })
  },

  addItem: (product_id) => {
    return api.get({
      path:   `items/add`,
      params: {
        product_id: product_id,
      },
    })
  },

  removeItem: (id) => {
    return api.get({
      path: `items/remove/${id}`,
    })
  },

  get: ({path, params = {}}) => {
    return api.req({path: path, params: params})
  },

  req: ({path, method = 'GET', params = {}}) => {
    app.loading.show()

    var options = {
      method: method,
    }

    return window
      .fetch(`${api.baseUrl}/${path}?${url.objectToQuery(params)}`, options)
      .then((response) => {
        app.loading.hide()
        return response.json()
      })
  },

}

