function AboutCtrl($scope, $routeParams, $rootScope) {
  $rootScope.$broadcast("NavCtrl.update", "about");
}
