(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);
//MenuAppController.$inject = ['MenuDataService'];
MenuAppController.$inject = ['retrieved_categories'];
//retrieved_categories
//function MenuAppController(categories) {
function MenuAppController(retrieved_categories) {
    var mainCategoryList = this;
    mainCategoryList.categorylist = retrieved_categories.data;
  }
})();
