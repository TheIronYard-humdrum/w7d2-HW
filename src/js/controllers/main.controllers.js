import angular from 'angular'

function MainController ($scope) {

  $scope.clicks = 0;
  $scope.clicksString = function () {
    if ( $scope.clicks === 1 ) {
      return `${$scope.clicks} Click`
    } else {
      return `${$scope.clicks} Clicks`
    }
  }

  $scope.addClick = function () {
    $scope.clicks ++;
  }
}

MainController.$inject = ['$scope'];
export { MainController }