var myApp = angular.module('myApp',[]);
myApp.controller('Sample', ['$scope', function($scope) {
    $scope.sample = 'Sample created by Zaki!';
}]);