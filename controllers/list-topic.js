app.controller("listTopicCtrl", function ($scope) {
    resetTopic()
    $scope.list = topics
    $scope.paletteColor = paletteColor
});