app.controller("listExamCtrl", function ($scope) {
    $scope.list = []
    $scope.licenseCode = license.code
    $scope.licensePass = license.pass

    var exams = fullExams.filter(function(exam){return exam.licenseCode.includes(license.code)})

    var topics = Array.from(new Set(exams.map((item) => item.exam)))

    for (var i = 0; i < topics.length; i++) {
        var css_class = ""
        var saved = getSavedExam(license.code, topics[i])

        var result = JSON.parse(saved)
        $scope.list.push({index: topics[i], 
            css_class: result?(result.result==0?"border-width: 0px;border-radius: 16px; padding:10px;background-color:#dc1354; color:white":"border-width: 0px;border-radius: 16px; padding:10px;background-color:#0171ec; color:white"):"border-radius: 16px; padding:10px",
            title_css: result?"color:white;":"color:#0171ec;",
            passed: result?result.passed:0, 
            failed: result?result.failed:0, 
            danger: result?result.danger:0, 
            unchecked: result?result.unchecked:0, 
            duration: result?result.time:"",
            result: result?(result.result==1?"ĐẠT":"CHƯA ĐẠT"):"",
        });
    }
});