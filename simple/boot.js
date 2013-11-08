require.config({
  baseUrl: "lib",
  paths: {
    "backbone": "fake-backbone",
    "app": "../app"
  }
});
require(["app/app"]);