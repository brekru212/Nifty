angular.module('nifty.controllers', ['ngOpenFB'])

  .controller('LoginCtrl', function($scope, $ionicModal, $timeout, ngFB, $state) {

    /** Function to login the user into the app using facebook*/
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
    /** Function to retrieve the user's facebook information after they login */
    $scope.getInfo = function () {
      /*Getter method to get information of me (user who is logged in)*/
      // ngFB.api('/me', 'GET', {fields: 'first_name,last_name,name,picture.width(300).height(300)'},
      ngFB.api({
        path: '/me',
        params: {fields: 'first_name,last_name,id,name,picture'}
      }).then(
        function(response) {
          var formattedName = response.first_name + " " + response.last_name.substring(0,1);
          localStorage.setItem('name', formattedName);
          localStorage.setItem('fbpic', JSON.stringify(response.picture.data.url));
        } )
    }

  })

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB, $state, userData) {
    /** Function to login the user into the app using facebook*/
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
    /** Function to retrieve the user's facebook information after they login */
    $scope.getInfo = function () {
      /*Getter method to get information of me (user who is logged in)*/
      // ngFB.api('/me', 'GET', {fields: 'first_name,last_name,name,picture.width(300).height(300)'},
        ngFB.api({
          path: '/me',
          params: {fields: 'first_name,last_name,id,name,picture'}
        }).then(
        function(response) {
          var formattedName = response.first_name + " " + response.last_name.substring(0,1);
          localStorage.setItem('name', formattedName);
          localStorage.setItem('fbpic', JSON.stringify(response.picture.data.url));
        } )
    }
  })

  .controller('ProfileCtrl', function($scope, ngFB, userData) {
    $scope.name = localStorage.getItem('name');
    $scope.fbpic = localStorage.getItem('fbpic');
  })
  .controller('PaymentCtrl', function($scope, userData) {
    $scope.name = localStorage.getItem('name');
    $scope.fbpic = localStorage.getItem('fbpic');
  })
  .controller('AddClothingCtrl', function($scope, userData) {
    $scope.name = localStorage.getItem('name');
    $scope.fbpic = localStorage.getItem('fbpic');
  })

  .controller('OnboardCompleteCtrl', function($scope) {

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
