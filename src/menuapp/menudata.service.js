(function () {
'use strict';

angular.module('data')
  .service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath) {
  var service = this;
  // Calls Server
  // Returns a promise, NOT items array directly
  ///categories.json
  service.getAllCategories_static = function () {
      console.log ("Retrieving all categories from Cache...");
      var categories = [
      {id:81,
    	short_name:"L",
    	name:"Lunch",
    	special_instructions:"",
      url:"https://davids-restaurant.herokuapp.com/categories/81.json"
      }
    ,{id:82,
    	short_name:"A",
    	name:"Soup",
    	special_instructions:"",
    	url:"https://davids-restaurant.herokuapp.com/categories/82.json"
    }
    ,{id:83,
      short_name:"B",
      name:"Appetizers",
      special_instructions:"",
      "url":"https://davids-restaurant.herokuapp.com/categories/83.json"
    }
    ,{id:84,
      short_name:"SP",
      name:"Chef's Recommendations",
      special_instructions:"",
      url:"https://davids-restaurant.herokuapp.com/categories/84.json"
      }
    ];
      return categories;
      // return $http ({
      //   method: "GET",url: (ApiBasePath + 'categories.json')
      // });
  };
  service.getAllCategories = function () {
      console.log ("Retrieving all categories from Server...");
       return $http ({
         method: "GET",url: (ApiBasePath + 'categories.json')
       });
  };
  service.getItemsForCategory = function(categoryShortName) {
    console.log ("Retrieving items from Server for category "+ categoryShortName);
    return $http ({
        method: "GET", url: (ApiBasePath + 'menu_items.json?category=' + categoryShortName)
    })
  }
}

})();
