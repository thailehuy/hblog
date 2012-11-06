function NavCtrl($scope, $routeParams, $rootScope, Post, PostInfo) {
  $scope.$on("NavCtrl.update", function(event, nav) {
    $scope.currentNavItem = nav;
  });

  $scope.navMenu = [
    {
      text: "Blog",
      href: "#/",
      controller: "post"
    },
    {
      text: "About",
      href: "#/about",
      controller: "about"
    },
    {
      text: "Code",
      href: "https://github.com/thailehuy/hblog",
      target: "_blank"
    }
  ];

  $scope.navClass = function(currentController) {
    if(currentController == $scope.currentNavItem)
      return "active";
    else
      return "";
  }
}
