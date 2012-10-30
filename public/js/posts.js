// module for loading blog posts from http://hpost.herokuapp.com
angular.module('postloader', ['ngResource']).
    factory('Post', function($resource) {
      var Post = $resource('https://hpost.herokuapp.com/posts.json',
        {
          //default params here
        }
        // Why does this break the result?
        // {
        //   query: {method: 'GET'}
        // }
      );

      return Post
    });

angular.module('postinfo', ['ngResource']).
  factory('PostInfo', function($resource) {
    var PostInfo = $resource('https://hpost.herokuapp.com/posts/info.json', {}, {});
    return PostInfo;
  });

