angular.module('post', ['postloader']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:PostListCtrl, templateUrl:'/views/_post_list.html'})
  });

function PostListCtrl($scope, Post) {
  $scope.currentPage = 1;
  $scope.perPage = 1;
  $scope.posts = Post.query({page: $scope.currentPage, per_page: $scope.perPage});

  $scope.reloadPosts = function() {
    this.posts = Post.query({page: this.currentPage, per_page: this.perPage});
  }

  $scope.nextPage = function() {
    this.currentPage = this.currentPage + 1;
    this.reloadPosts();
  }
}