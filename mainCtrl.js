  (function() {

    var app = angular.module("githubViewer", []);

    var mainCtrl = function($scope, $http) {

      $scope.message = "GitHub Viewer";

      var onUserComplete = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onRepos, onError)
        $scope.gravatarUrl = "http://www.gravatar.com/avatar/" + response.data.gravatar_id
      };

      var onRepos = function(response) {
        $scope.repos = response.data;
      }

      var onError = function(reason) {
        $scope.error = "could not fetch data."
      }

      $scope.search = function(username) {
        $http.get("https://api.github.com/users/" + username)
          .then(onUserComplete, onError);
      }

      $scope.orderByField = 'name';
      $scope.reverseSort = false;

    }
    app.controller("mainCtrl", mainCtrl);
  })();