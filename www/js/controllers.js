angular.module('nifty.controllers', ['ngOpenFB'])

  .controller('LoginCtrl', function($scope, $ionicModal, $timeout, ngFB, $state) {
    $scope.user = {};
    $scope.user.name, $scope.user.fbpic, $scope.user.address, $scope.user.bio;

    // SLIDES
    $scope.swiperOptions = {
      /* Whatever options */
      effect: 'slide',
      initialSlide: 0,
      /* Initialize a scope variable with the swiper */
      onInit: function(swiper){
        $scope.swiper = swiper;
      },
      onSlideChangeEnd: function(swiper){
        console.log('The active index is ' + swiper.activeIndex);
      },

    };

    /** Function to login the user into the app using facebook*/
    $scope.fbLogin = function () {
      ngFB.login({scope: 'email'}).then(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            /*$state.go('tab-home');*/
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
        params: {fields: 'first_name,last_name,id,name,picture.width(300).height(300)'}
      }).then(
        function(response) {
          $scope.user.name = response.first_name + " " + response.last_name.substring(0,1);
          $scope.user.fbpic = response.picture.data.url;
          console.log($scope.user);
          $scope.swiper.slideNext();
          $scope.swiper.allowSwipeToPrev = false;

        } )
    };
    $scope.profileComplete = function() {
      if($scope.user.name !== undefined && $scope.user.bio !== undefined && $scope.user.address !== undefined) {
        $scope.swiper.slideNext();
        console.log($scope.user.name + "bio " + $scope.user.bio + "address " + $scope.user.address);
      } else {
        console.log("Still need to fill in profile info!")
      }
    }

  })

/*  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB, $state, userData) {
    /!** Function to login the user into the app using facebook*!/
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
    /!** Function to retrieve the user's facebook information after they login *!/
    $scope.getInfo = function () {
      /!*Getter method to get information of me (user who is logged in)*!/
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
  })*/

  .controller('HomeCtrl', function($scope, Home) {
    $scope.home = Home.all();
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
