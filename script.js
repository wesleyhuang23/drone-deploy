angular.module('app', [])

.controller('appCtrl', function($scope){

  $scope.test = 'PDF';

  new DroneDeploy({version: 1}).then(function(api){
  console.log('DroneDeploy Api: ', api);
  api.Plans.getCurrentlyViewed().then(function(plan){
    console.log(plan);
    api.Images.get(plan.id, {width: 450, height: 450}).then(function(arrayOfImageInformation){ 
    arrayOfImageInformation.sort(function(a, b) {
      if (a.data.filename < b.data.filename) {
        return -1;
      }
      if (a.data.filename > b.data.filename) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    console.log(arrayOfImageInformation) 
  });

});
});



})





