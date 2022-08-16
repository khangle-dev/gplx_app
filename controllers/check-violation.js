app.controller("checkCtrl", function ($scope, $sce) {
    $scope.bienso = ""
    $scope.loaixe = "1"
    $scope.result = ""

    $scope.submit = function() {
        let settings = {
            "url": "https://phatnguoi.herokuapp.com/phatnguoi",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({"bienso":$scope.bienso,"loaixe":$scope.loaixe}),
          };

          $.ajax(settings).done(function (response) {
            $scope.result = $sce.trustAsHtml(response)
            $scope.$apply();
          });
    };
})