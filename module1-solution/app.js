(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', LunchCheckController]);

  function LunchCheckController($scope) {
    $scope.list = "";
    $scope.message = "";

    $scope.check = function () {
      var parts = $scope.list.split(", ");
      var numberOfDishes = 0;
      for(var i = 0; i < parts.length; ++i) {
        if(parts[i] != "") {
          numberOfDishes++;
        }
      }
      if($scope.list == "") {
        $scope.message = "Please enter data first";
      } else if(numberOfDishes <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };

})();
