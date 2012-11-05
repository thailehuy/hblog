var postModule = angular.module('post', ['postloader', 'postinfo', 'extraServices']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:PostListCtrl, templateUrl:'/views/_post_list.html'}).
      when('/page/:pageNum', {controller:PostListCtrl, templateUrl:'/views/_post_list.html'})
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

function PostListCtrl($scope, $routeParams, Post, PostInfo) {
  $scope.perPage = 1;

  if ($routeParams && $routeParams.pageNum) {
    $scope.currentPage = parseInt($routeParams.pageNum);
    if (!$scope.currentPage)
      $scope.currentPage = 1
  } else
    $scope.currentPage = 1;

  $scope.posts = Post.query({page: $scope.currentPage, per_page: $scope.perPage});
  $scope.postInfo = PostInfo.get();

  $scope.firstPageClass = function() {
    if ($scope.currentPage == 1)
      return 'disabled';
    else
      return "";
  }

  $scope.lastPageClass = function() {
    if ($scope.currentPage == $scope.postInfo.post_count)
      return 'disabled';
    else
      return "";
  }

  $scope.pageClass = function(page) {
    if (page == $scope.currentPage)
      return "active";
    else
      return "";
  }
}