function PostListCtrl($scope, $routeParams, $rootScope, Post, PostInfo) {
  $rootScope.$broadcast("NavCtrl.update", "post");
  $scope.perPage = 5;
  $scope.postInfo = PostInfo.get({perPage: $scope.perPage});

  if ($routeParams && $routeParams.pageNum) {
    $scope.currentPage = parseInt($routeParams.pageNum);
    if (!$scope.currentPage)
      $scope.currentPage = 1
  } else {
    $scope.currentPage = 1;
  }

  $scope.posts = Post.query({page: $scope.currentPage, per_page: $scope.perPage});
}
