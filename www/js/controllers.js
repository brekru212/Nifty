angular.module('nifty.controllers', ['ngOpenFB'])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB, $state) {
    $scope.fbLogin = function () {
      ngFB.login({scope: 'email'}).then(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $state.go('profile');
          } else {
            alert('Facebook login failed');
          }
        }
      );
    };
  })

  .controller('HomeCtrl', function($scope, Home) {
    $scope.home = Home.all();
  })

  .controller('LoginCtrl', function ($scope, ngFB) {
    ngFB.api({
      path: '/me',
      params: {fields: 'id,name'}
    }).then(
      function (user) {
        $scope.user = user;
      },
      function (error) {
        alert('Facebook error: ' + error.error_description);
      }
    );
  })

  .controller('LikesCtrl', function($scope) {})

  .controller('SearchCtrl', function($scope) {})

  .controller('MessagesCtrl', function($scope) {})

  // .controller('LoginCtrl', function($scope) {
  //   $scope.name = 'login please';
  //   $scope.FBLogin = function() {
  //     FB.login(function(response) {
  //       if (response.status === 'connected') {
  //         console.log("connected to fb");
  //         var accessToken = FB.getAuthResponse();
  //         console.log(accessToken);
  //       } else if (response.status === 'not_authorized') {
  //         console.log("not auth'd to connect to fb");
  //       } else {
  //         console.log("not connected to fb");
  //       }
  //     })
  //   }
  // })

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
