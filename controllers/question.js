app.controller("questionCtrl", function ($scope) {
    resetTopic()
    $scope.topicCode = getParaCurr("topic")

    if ($scope.topicCode == 9) {
        $scope.topic = { "code": 9, "display": "Lưu ý 2025", "subTitle": ``, "num": 0 }
    }else {
        $scope.topic = topics.filter(function(topic){return topic.code==$scope.topicCode})[0]
    }
    
    resetIndex()
    
    if ($scope.topicCode == "" || $scope.topicCode == "0") {
        $scope.questions = fullQuestions;
    }else if ($scope.topicCode == "8"){
        $scope.questions = fullQuestions.filter(function(question) {return question.required > 0});
    }else if ($scope.topicCode == "9"){

        const licenseType = localStorage.getItem("is_license");
        const filterConditions = {
            "A1_2025": (question) => question.a1 > 0,
            "A_2025": (question) => question.a2 > 0,
            "B1_2025": (question) => question.a34 > 0,
            "B_2025": () => true,
            "C1_2025": () => true,
            "C_2025": () => true,
            "D1_2025": () => true,
            "D2_2025": () => true,
            "D_2025": () => true,
            "D2_2025": () => true,
            "D_2025": () => true,
            "BE_2025": () => true,
            "C1E_2025": () => true,
            "CE_2025": () => true,
            "D1E_2025": () => true,
            "D2E_2025": () => true,
            "DE_2025": () => true
            };
            
        const filterFunction = filterConditions[licenseType];

        $scope.questions = filterFunction 
        ? original94Questions.filter(filterFunction)
        : (filterConditions[licenseType] === true ? originalQuestions : []);
    }else{
        $scope.questions = fullQuestions.filter(function(question) {return question.topic == parseInt($scope.topicCode)});
    }

    load(0);

    function load(index = 0) {
        $scope.index = index;
        $scope.show_result = true;
        $scope.question = $scope.questions[index]
    }

    $scope.nextQuestion = function() {
        var index = $scope.index;
        index ++;

        if (index > $scope.questions.length - 1) index = 0;

        load(index);
    }

    $scope.prevQuestion = function() {
        var index = $scope.index;
        index --;

        if (index < 0) index = $scope.questions.length - 1;

        load(index);
    }

});