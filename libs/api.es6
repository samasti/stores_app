---
---
window.apiData = {
  profile: 'poda',
  host:    'http://localhost:3000',
}

window.api = {
  baseUrl: `${apiData.host}/profile/${apiData.profile}/plugin/stores_app`,

  catalog: () => {
    return api.req({
      path: `catalog/listing`,
    })
  },

  req: ({path, params = {}}) => {
    $(app.loading).show()

    return window
    .fetch(`${api.baseUrl}/${path}?${url.objectToQuery(params)}`)
    .then((response) => {
      return response.json()
    })
  },

}

