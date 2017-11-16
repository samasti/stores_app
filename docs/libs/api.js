'use strict';

window.apiData = {
  profile: 'poda',
  host: 'http://localhost:3000'
};

window.api = {
  baseUrl: apiData.host + '/profile/' + apiData.profile + '/plugin/stores_app',

  catalog: function catalog() {
    return api.req({
      path: 'catalog/listing'
    });
  },

  orders: function orders(_ref) {
    var _ref$action = _ref.action;
    var action = _ref$action === undefined ? 'last' : _ref$action;

    return api.req({
      path: 'orders/' + action
    });
  },

  req: function req(_ref2) {
    var path = _ref2.path;
    var _ref2$params = _ref2.params;
    var params = _ref2$params === undefined ? {} : _ref2$params;

    $(app.loading).show();

    return window.fetch(api.baseUrl + '/' + path + '?' + url.objectToQuery(params)).then(function (response) {
      return response.json();
    });
  }

};