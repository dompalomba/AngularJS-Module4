(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })
  // Categories page
     .state('categories', {
       url: '/categories',
       templateUrl: 'src/menuapp/templates/category-list.template.html',
       controller: 'MenuAppController as Menuctrl'
        ,resolve: {
          retrieved_categories: ['MenuDataService', function (MenuDataService) {
            console.log ("Setting Promise MenuDataService");
            return MenuDataService.getAllCategories();
            }]
          }
        }// Single Category Detail View (in Master/Detail) view-pair
      )
       .state ('category-items', {
       url: '/items/{categoryShortName}',
         templateUrl: 'src/menuapp/templates/detail-category-item.template.html'
         ,controller: 'ItemDetailController as itemDetail'
         ,resolve: {
           category: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
             console.log ("Getting Single Category DataService for Param: " + $stateParams.categoryShortName);
             return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
           }]
         }
         ,params: {
           categoryShortName: null
         }
       }
     );
  }
})();
