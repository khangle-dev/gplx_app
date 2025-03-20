app.controller("homeCtrl", function ($scope) {
    $scope.licenseCode = license.code

    resetIndex()

    $scope.numofQuestion = fullQuestions.length

    $scope.numofDanger = fullQuestions.filter(function(question){return question.required>0}).length

    $scope.isChoose2025 = function(){
        return isChooseDataSet(0)
    }
    $scope.chooseDataSet = function (dataSet) {
        resetIndex()
        chooseDataSet(dataSet)
    }
    $scope.isChooseDataSet = function (dataSet) {
        return isChooseDataSet(dataSet)
    };
});