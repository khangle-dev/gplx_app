app.controller("homeCtrl", function ($scope) {
    $scope.licenseCode = license.code

    resetIndex()

    $scope.numofQuestion = fullQuestions.length

    $scope.numofDanger = dangerQuestions.length
});