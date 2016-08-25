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
        $scope.hideNavBar = true;
      },
      onSlideChangeStart: function(swiper) {
        console.log(swiper.activeIndex);
        if (swiper.isBeginning) {
          $scope.hideNavBar = true;
        } else {
          $scope.hideNavBar = false;
        }
        console.log($scope.hideNavBar);
      },
      onSlideChangeEnd: function(swiper){
        console.log('The active index is ' + swiper.activeIndex);
        console.log($scope.hideNavBar);
      },
    };

    /** Function to login the user into the app using facebook*/
    $scope.fbLogin = function () {
      ngFB.login({scope: 'email'}).then(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $scope.loggedin = true;
            $scope.getInfo();
            $scope.swiper.slideNext();
            /*$scope.swiper.allowSwipeToPrev = false;*/
            /*$state.go('tab-home');*/
          } else {
            alert('Facebook login failed');
            $scope.loggedin = false;
          }
        }
      );
    };
    /** Function to retrieve the user's facebook information after they login */
    $scope.getInfo = function () {
      ngFB.api({
        path: '/me',
        params: {fields: 'first_name,last_name,id,name,picture.width(300).height(300)'}
      }).then(
        function(response) {
          $scope.user.name = response.first_name + " " + response.last_name.substring(0,1);
          $scope.user.fbpic = response.picture.data.url;
          console.log($scope.user);
        } )
    };

    $scope.profileComplete = function() {
      if($scope.user.name !== undefined && $scope.user.bio !== undefined && $scope.user.address !== undefined) {
        $scope.swiper.slideNext();
        console.log($scope.user.name + "bio " + $scope.user.bio + "address " + $scope.user.address);
      } else {
        console.log("Still need to fill in profile info!")
      }
    };

  })

  .controller('HomeCtrl', function($scope, Home) {
    $scope.home = Home.all();
  })

  .controller('LikesCtrl', function($scope) {})

  .controller('SearchCtrl', function($scope) {})

  .controller('MessagesCtrl', function($scope) {})

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
