(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['category'];
function ItemDetailController(category) {
  var itemDetail = this;
  console.log ("In ItemDetailController, category object resolved by server:");
  console.log (category.data.category);
  console.log ("In ItemDetailController, Menu_items object resolved by server:");
  console.log (category.data.menu_items);
  itemDetail.menu_items = category.data.menu_items;
  itemDetail.categoryname = category.data.category.name;
}

})();
