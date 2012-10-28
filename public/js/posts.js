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
