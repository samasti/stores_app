'use strict';

window.apiData = {
  profile: 'poda',
  host: 'http://localhost:3000'
};

window.api = {
  baseUrl: apiData.host + '/profile/' + apiData.profile + '/plugin/stores_app',

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

    return api.req({ path: path, params: params });
  },

  req: function req(_ref3) {
    var path = _ref3.path;
    var _ref3$method = _ref3.method;
    var method = _ref3$method === undefined ? 'GET' : _ref3$method;
    var _ref3$params = _ref3.params;
    var params = _ref3$params === undefined ? {} : _ref3$params;

    app.loading.show();

    var options = {
      method: method
    };

    return window.fetch(api.baseUrl + '/' + path + '?' + url.objectToQuery(params), options).then(function (response) {
      app.loading.hide();
      return response.json();
    });
  }

};