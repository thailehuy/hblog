var postModule = angular.module('post', ['postloader', 'postinfo', 'extraServices']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:PostListCtrl, templateUrl:'/views/_post_list.html'}).
      when('/page/:pageNum', {controller:PostListCtrl, templateUrl:'/views/_post_list.html'}).
      when('/about', {controller:AboutCtrl, templateUrl:'/views/_about.html'})
  });

postModule.filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<=max; i++)
      input.push(i);
    return input;
  };
});