function PostPaginationCtrl($scope, $rootScope) {
  $scope.getPageRanges = function(maxPage) {
    result = [];
    for(var i = 1; i <= maxPage; i++)
      result.push(i);
    return result;
  }

  $scope.firstPageClass = function() {
    if ($scope.currentPage == 1)
      return 'disabled';
    else
      return "";
  }

  $scope.lastPageClass = function() {
    if ($scope.currentPage == $scope.postInfo.max_page)
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
