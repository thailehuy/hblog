function PostListCtrl($scope, $routeParams, $rootScope, Post, PostInfo) {
  $rootScope.$broadcast("NavCtrl.update", "post");
  $scope.perPage = 1;

  if ($routeParams && $routeParams.pageNum) {
    $scope.currentPage = parseInt($routeParams.pageNum);
    if (!$scope.currentPage)
      $scope.currentPage = 1
  } else {
    $scope.currentPage = 1;
  }

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
