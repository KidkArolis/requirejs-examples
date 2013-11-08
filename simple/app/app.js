define(function (require) {

  var helper = require("./helper");
  var Backbone = require("backbone");

  var model = Backbone.Model();

  document.body.innerHTML = helper + " " + model;

});