app.controller("randomCtrl", function ($scope, $interval) {

    $scope.examCode = 99
    $scope.licenseCode = license.code

    clearExamAnswer($scope.licenseCode, $scope.examCode)

    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
      }

    resetIndex()

    $scope.questions = []
    for (i=1; i<=6; i++){
        let randOfTopic = fullQuestions.filter(function(question){return question.topic == i && isRequired(question, license.code)==false})
        let num = license.randQuestions.filter(function (rand) {return rand.topicCode == i})[0].num
        
        let set = shuffle(randOfTopic).slice(0, num);

        console.log(`Set count: ${set.length} for topic ${i} with num ${num}`);
    
        $scope.questions.push(...set)
    }

    let required = shuffle(fullQuestions.filter(function(question){return isRequired(question, license.code)}))
    $scope.questions.push(...required.slice(0, 1))

    $scope.countDown = license.timer

    $interval(function() {
        $scope.countDown--
        let minutes = Math.floor($scope.countDown / 60)
        let seconds = Math.floor($scope.countDown % 60)

        $scope.timer = `${minutes}:${seconds}`
        
        if ($scope.countDown == 0) $scope.submit()
    }, 1000, $scope.countDown)

    load(0)

    function load(index = 0) {
        
        $scope.index = index
        $scope.show_result = false

        $scope.question = $scope.questions[index]
        $scope.dangerCss = isRequired($scope.question, license.code) ? "color:#ff9400" : ""
    }

    function shuffle(array) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
    return result;
}

    $scope.nextQuestion = function() {
        let index = $scope.index
        index ++

        if (index > $scope.questions.length - 1) index =$scope.questions.length - 1

        load(index)
    }

    $scope.prevQuestion = function() {
        let index = $scope.index
        index --

        if (index < 0) index = 0

        load(index)
    }

    $scope.getAnswerClass = function (answerIndex) {
        if (!$scope.show_result) {
            return ""
        }

        var answer = $scope.question.answers[answerIndex];
        if (answer.correct) {
            return "correct"
        } else if (isAnswered($scope.licenseCode, $scope.question.index, answerIndex)) {
            return "wrong"
        } else {
            return ""
        }
    };

    $scope.toggleResult = function () {
        $scope.show_result = !$scope.show_result
    };

    $scope.toggleAnswer = function (answerIndex) {
        toggleExamAnswer($scope.licenseCode, $scope.examCode, $scope.question.index, answerIndex)
        toggleAnswer($scope.licenseCode, $scope.question.index, answerIndex)
    }

    $scope.isAnswered = function(answerIndex) {
        return getExamAnswered($scope.licenseCode, $scope.examCode, $scope.question.index) == answerIndex ? "checked" : ""
    }

    $scope.submit = function() {
        let saveAnses = $scope.questions.map(function(question){
            return isExamAnsweredCorrect($scope.licenseCode, $scope.examCode, question.index)
        })
        let dangerQuestions = $scope.questions.filter(function(question){return isRequired(question, license.code)})
        let dangerCorrectAnses  = dangerQuestions.map(function(question){return isExamAnsweredCorrect($scope.licenseCode, $scope.examCode, question.index) }).filter(function(correct){return correct == true})
        let danger = dangerCorrectAnses.length
        let passed = saveAnses.filter(function(ans){return ans == true}).length
        let result = ((passed >= license.pass) && (danger>=dangerQuestions.length))? "ĐẠT" : "KHÔNG ĐẠT"
        let hasAns = $scope.questions.filter(function(question){return hasExamAnswered($scope.licenseCode, $scope.examCode, question.index)}).length
        let unchecked = $scope.questions.length - hasAns
        let failed = $scope.questions.length - (passed + unchecked)
        let duration = license.timer - $scope.countDown
        let minutes = Math.floor(duration / 60)
        let seconds = Math.floor(duration % 60)
        let timer = `${minutes}:${seconds}`

        alert(`Kết quả: ${result} \n - Số câu đúng: ${passed} \n - Số câu sai: ${failed} \n - Câu liệt đúng: ${danger}/${dangerQuestions.length}`)
        //saveExam($scope.licenseCode, $scope.examCode, `{"passed":${passed}, "failed":${failed}, "danger":${danger}, "unchecked": ${unchecked}, "time":"${timer}", "result":${result}}`)
    }
})
