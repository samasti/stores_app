---
---
window.url = {

  params: _.chain(location.search.slice(1).split('&'))
    .map((item) => { if (item) return item.split('=') })
    .compact()
    .fromPairs()
    .value(),

  current: null,

  pushState: (params) => {
    $(app.loading).hide()

    url.setCurrent(params)
    history.pushState(url.params, null, url.current)
  },

  replaceState: (params) => {
    url.setCurrent(params)
    history.replaceState(url.params, null, url.current)
  },

  setCurrent: (params) => {
    _.assign(url.params, params)
    url.current = `${window.location.origin}${location.pathname}?${url.objectToQuery(url.params)}`
  },

  getToken: () => {
    var auth_token = url.params.auth_token || Cookies.get('auth_token')

    if (url.params.auth_token) {
      delete url.params.auth_token
      //url.replaceState()
      Cookies.set('auth_token', auth_token)
    }

    return auth_token
  },

  objectToQuery: (obj) => {
    return _.map(obj, (v, k) => `${k}=${encodeURIComponent(v)}` ).join('&')
  },
}
