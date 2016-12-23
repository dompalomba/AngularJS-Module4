(function () {
'use strict';

angular.module('MenuApp')
.component('categoryItem', {
  templateUrl: 'src/menuapp/templates/item.template.html',
  bindings: {
      menuitems: '<'
    }
});

})();
