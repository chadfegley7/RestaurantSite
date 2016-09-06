var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './../static/partials/gameReviews.html'
    })

    .when('/chef', {
      url: '/chef',
      templateUrl: './../static/partials/chef.html'
    })
    .when('/menu', {
      url: '/menu',
      templateUrl: './../static/partials/menu.html'
    })
    .when('/gallery', {
      url: '/gallery',
      templateUrl: './../static/partials/gallery.html'
    })
    .when('/press', {
      url: '/press',
      templateUrl: './../static/partials/press.html'
    })
    .when('/contact', {
      url: '/contact',
      templateUrl: './../static/partials/contact.html'
    })

    .otherwise({
      redirectTo: "/"
    });
});
