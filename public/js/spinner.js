angular.module('extraServices', ['ngResource'])
    .config(function ($httpProvider) {
        $httpProvider.responseInterceptors.push('myHttpInterceptor');
        var spinnerFunction = function (data, headersGetter) {
            return data;
        };
        $httpProvider.defaults.transformRequest.push(spinnerFunction);
    })
    //register the interceptor as a service, intercepts ALL angular ajax http calls
    .factory('myHttpInterceptor', function ($q, $window, $rootScope) {
        return function (promise) {
            $rootScope.ajaxLoading = true;
            return promise.then(function (response) {
                $rootScope.ajaxLoading = false;
                return response;
            }, function (response) {
                $rootScope.ajaxLoading = false;
                $rootScope.network_error = true;
                return $q.reject(response);
            });
        };
    })