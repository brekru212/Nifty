// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('nifty', ['ionic', 'nifty.controllers', 'nifty.services', 'nifty.home', 'ngOpenFB'])

  .run(function($ionicPlatform, ngFB) {
    ngFB.init({appId: '1331224416906757'});
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .directive('ngFloatl', function () {
    return {
      link: function (scope, elem, attrs, ctrl)  {
        var wrapper = elem[0];
        var label = wrapper.querySelector('label');
        var input = wrapper.querySelector('input');

        angular.element(elem).addClass('floatl');
        angular.element(label).addClass('floatl__label');
        angular.element(input).addClass('floatl__input');

        new Floatl(wrapper);
      }
    }
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tab.likes', {
        url: '/likes',
        views: {
          'tab-likes': {
            templateUrl: 'templates/tab-likes.html',
            controller: 'LikesCtrl'
          }
        }
      })

      .state('tab.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search.html',
            controller: 'SearchCtrl'
          }
        }
      })

      .state('tab.messages', {
        url: '/messages',
        views: {
          'tab-messages': {
            templateUrl: 'templates/tab-messages.html',
            controller: 'MessagesCtrl'
          }
        }
      })

      //.state('tab.chats', {
      //  url: '/chats',
      //  views: {
      //    'tab-chats': {
      //      templateUrl: 'templates/tab-chats.html',
      //      controller: 'ChatsCtrl'
      //    }
      //  }
      //})
      //.state('tab.chat-detail', {
      //  url: '/chats/:chatId',
      //  views: {
      //    'tab-chats': {
      //      templateUrl: 'templates/chat-detail.html',
      //      controller: 'ChatDetailCtrl'
      //    }
      //  }
      //})

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'AppCtrl'
      })
      .state('profile', {
        url: '/onboard-profile',
          templateUrl: 'templates/onboarding/onboard-profile.html'
      })
      .state('payment', {
        url: '/onboard-payment',
        templateUrl: 'templates/onboarding/onboard-payment.html'
      })

      .state('clothing', {
        url: '/onboard-clothing',
        templateUrl: 'templates/onboarding/onboard-clothing.html'
      });

    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('/tab/home');
    $urlRouterProvider.otherwise('/login');

  });
