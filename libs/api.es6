---
---
window.apiData = {
  profile:    'poda',
  host:       'http://localhost:3000',
  auth_token: storage.get('auth_token'),
}

window.api = {
  baseUrl: `${apiData.host}/profile/${apiData.profile}/plugin/stores_app`,

  signin: (params) => {
    return api.post({
      path:   `users/signin`,
      params: params,
    })
  },

  signup: (params) => {
    return api.post({
      path:   `users/signup`,
      params: params,
    })
  },

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
    return api.req({path: path, method: 'GET',  params: params})
  },
  post: ({path, params = {}}) => {
    return api.req({path: path, method: 'POST', params: params})
  },

  req: ({path, method = 'GET', params = {}}) => {
    app.loading.show()

    var options = {
      method: method,
    }
    params.auth_token = apiData.auth_token

    var u
    if (method == 'GET')
      u = `${api.baseUrl}/${path}?${url.objectToQuery(params)}`
    else {
      u = `${api.baseUrl}/${path}`

      options.body = new FormData
      for (var k in params) options.body.append(k, params[k])
    }

    return window
      .fetch(u, options)
      .then((response) => {
        app.loading.hide()
        return response.json()
      })
  },

}

