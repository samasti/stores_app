"use strict";

window.storage = {

  set: function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  },

  get: function get(key) {
    var value = localStorage.getItem(key);
    if (!value) return;
    return JSON.parse(value);
  }

};