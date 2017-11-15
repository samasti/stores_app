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

  req: function req(_ref) {
    var path = _ref.path;
    var _ref$params = _ref.params;
    var params = _ref$params === undefined ? {} : _ref$params;

    $(app.loading).show();

    return window.fetch(api.baseUrl + '/' + path + '?' + url.objectToQuery(params)).then(function (response) {
      if (response.status == 403) Cookies.remove('auth_token');else return response.json();
    });
  }

};