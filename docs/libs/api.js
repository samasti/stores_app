'use strict';

window.apiData = {
  profile: 'poda',
  host: 'http://cirandas.net',
  auth_token: storage.get('auth_token')
};

window.api = {
  baseUrl: apiData.host + '/profile/' + apiData.profile + '/plugin/stores_app',

  signin: function signin(params) {
    return api.post({
      path: 'users/signin',
      params: params
    });
  },

  signup: function signup(params) {
    return api.post({
      path: 'users/signup',
      params: params
    });
  },

  catalog: function catalog() {
    return api.get({
      path: 'catalog/listing'
    });
  },

  orders: function orders(_ref) {
    var _ref$action = _ref.action;
    var action = _ref$action === undefined ? 'last' : _ref$action;

    return api.get({
      path: 'orders/' + action
    });
  },

  addItem: function addItem(product_id) {
    return api.get({
      path: 'items/add',
      params: {
        product_id: product_id
      }
    });
  },

  removeItem: function removeItem(id) {
    return api.get({
      path: 'items/remove/' + id
    });
  },

  get: function get(_ref2) {
    var path = _ref2.path;
    var _ref2$params = _ref2.params;
    var params = _ref2$params === undefined ? {} : _ref2$params;

    return api.req({ path: path, method: 'GET', params: params });
  },
  post: function post(_ref3) {
    var path = _ref3.path;
    var _ref3$params = _ref3.params;
    var params = _ref3$params === undefined ? {} : _ref3$params;

    return api.req({ path: path, method: 'POST', params: params });
  },

  req: function req(_ref4) {
    var path = _ref4.path;
    var _ref4$method = _ref4.method;
    var method = _ref4$method === undefined ? 'GET' : _ref4$method;
    var _ref4$params = _ref4.params;
    var params = _ref4$params === undefined ? {} : _ref4$params;

    app.loading.show();

    var options = {
      method: method
    };
    params.auth_token = apiData.auth_token;

    var u;
    if (method == 'GET') u = api.baseUrl + '/' + path + '?' + url.objectToQuery(params);else {
      u = api.baseUrl + '/' + path;

      options.body = new FormData();
      for (var k in params) options.body.append(k, params[k]);
    }

    return window.fetch(u, options).then(function (response) {
      app.loading.hide();
      return response.json();
    });
  }

};