var postModule = angular.module('post', ['postloader', 'postinfo', 'extraServices']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:PostListCtrl, templateUrl:'/views/_post_list.html'}).
      when('/page/:pageNum', {controller:PostListCtrl, templateUrl:'/views/_post_list.html'}).
      when('/about', {controller:AboutCtrl, templateUrl:'/views/_about.html'})
  });