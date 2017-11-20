'use strict';

window.url = {

  params: _.chain(location.search.slice(1).split('&')).map(function (item) {
    if (item) return item.split('=');
  }).compact().fromPairs().value(),

  current: null,

  pushState: function pushState(params) {
    $(app.loading).hide();

    url.setCurrent(params);
    history.pushState(url.params, null, url.current);
  },

  replaceState: function replaceState(params) {
    url.setCurrent(params);
    history.replaceState(url.params, null, url.current);
  },

  setCurrent: function setCurrent(params) {
    _.assign(url.params, params);
    url.current = '' + window.location.origin + location.pathname + '?' + url.objectToQuery(url.params);
  },

  getToken: function getToken() {
    var auth_token = url.params.auth_token || Cookies.get('auth_token');

    if (url.params.auth_token) {
      delete url.params.auth_token;
      //url.replaceState()
      Cookies.set('auth_token', auth_token);
    }

    return auth_token;
  },

  objectToQuery: function objectToQuery(obj) {
    return _.map(obj, function (v, k) {
      return k + '=' + encodeURIComponent(v);
    }).join('&');
  }
};