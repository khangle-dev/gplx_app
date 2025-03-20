$(function () {
    FastClick.attach(document.body);

    document.addEventListener("deviceready", function () {
        if (StatusBar) StatusBar.hide();
    }, false);

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "300",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
});

var db = {
    hasValue: function (key) {
        let value = localStorage.getItem(key);
        return !(value == null || value == undefined || value == "");
    },
    set: function (key, value) {
        localStorage.setItem(key, value);
    },
    get: function (key) {
        let value = localStorage.getItem(key);
        if (value == null || value == undefined) {
            return "";
        }
        return value;
    },
    getInt: function (key, defaultValue) {
        let value = db.get(key);
        if (value == "") {
            return defaultValue;
        } else {
            return parseInt(value);
        }
    },
    getList: function (key) {
        let json = db.get(key);
        if (json == "") {
            return [];
        } else {
            return JSON.parse(json);
        }
    }
};

function getCurrentQuestionIndex() {
    return db.getInt("currentIndex", 0);
}

function toggleAnswer(licenseCode, questionIndex, answerIndex) {
    let key = "is_answer_" + licenseCode + "_" + questionIndex
    localStorage.setItem(key, answerIndex)
    return true
}

function isAnswered(licenseCode, questionIndex, answerIndex) {
    let key = "is_answer_" + licenseCode + "_" + questionIndex
    let value = localStorage.getItem(key)
    return value == answerIndex
}

function toggleExamAnswer(licenseCode, examCode, questionIndex, answerIndex) {
    let key = "is_answer_" + licenseCode + "_" + examCode + "_" + questionIndex
    localStorage.setItem(key, answerIndex);
    return true
}

function clearExamAnswer(licenseCode, examCode) {
    for (let i=1; i<=650; i++){
        let key = "is_answer_" + licenseCode + "_" + examCode + "_" + i
        localStorage.removeItem(key);
    }
    
    return true
}

function getExamAnswered(licenseCode, examCode, questionIndex) {
    let key = "is_answer_" + licenseCode + "_" + examCode + "_" + questionIndex
    let value = localStorage.getItem(key)
    return value
}

function isExamAnsweredCorrect(licenseCode, examCode, questionIndex) {
    let question = fullQuestions.filter(function (question) { return question.index == questionIndex })[0]

    for (let answerIndex = 0; answerIndex < question.answers.length; answerIndex++) {
        let answer = question.answers[answerIndex];

        if (answer.correct && getExamAnswered(licenseCode, examCode, questionIndex)==answerIndex) return true;
    }
    return false;
}

function hasExamAnswered(licenseCode, examCode, questionIndex) {
    let key = "is_answer_" + licenseCode + "_" + examCode + "_" + questionIndex
    let value = localStorage.getItem(key)
    return value
}

function getSaveAns(licenseCode, questionIndex) {
    let key = "is_answer_" + licenseCode + "_" + questionIndex;
    let value = localStorage.getItem(key);
    return value
}

function isChooseLicense(licenseCode) {
    const key = "is_license"
    const value = localStorage.getItem(key);
    return value == licenseCode
}

function chooseLicense(licenseCode) {
    const key = "is_license"
    localStorage.setItem(key, licenseCode);
    return true
}

function getSavedLicense() {
    const key = "is_license"
    const value = localStorage.getItem(key)

    return value ? value : "B_2025"
}

function isChooseDataSet(dataSet) {
    const key = "is_data_set"
    const value = localStorage.getItem(key);
    return value == dataSet
}

function chooseDataSet(dataSet) {
    const key = "is_data_set"
    localStorage.setItem(key, dataSet);
    return true
}

function getSavedDataSet() {
    const key = "is_data_set"
    const value = localStorage.getItem(key)

    return value ? value : 0
}

function hasAnswered(licenseCode, questionIndex) {
    let question = fullQuestions.filter(function (question) { return question.index == questionIndex })[0]

    for (let i = 0; i < question.answers.length; i++) {
        if (isAnswered(licenseCode, questionIndex, i)) {
            return true;
        }
    }
    return false;
}

function isAnsweredWrong(licenseCode, questionIndex) {
    let question = fullQuestions.filter(function (question) { return question.index == questionIndex })[0]
    for (let i = 0; i < question.answers.length; i++) {
        let answer = question.answers[i];
        if (answer.correct && !isAnswered(licenseCode, questionIndex, i)) return true;
        if (!answer.correct && isAnswered(licenseCode, questionIndex, i)) return true;
    }
    return false;
}

function saveExam(licenseCode, examCode, result) {
    const key = "is_saveexam_" + licenseCode + "_" + examCode
    localStorage.setItem(key, result)
    return true
}

function getSavedExam(licenseCode, examCode) {
    const key = "is_saveexam_" + licenseCode + "_" + examCode
    return localStorage.getItem(key)
}

function showAlertBox(msg, closeText, callback) {
    const boxHtml = "<div id='alert-box' style='position: fixed; z-index: 99999; top: 0px; left: 0px; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background-color: rgba(0, 0, 0, 0.5);'>"
        + "<div style='border: 1px solid #505050; padding: 15px; background-color: #fff; border-radius: 10px;'>"
        + "<div>" + msg + "</div>"
        + "<div style='text-align: center; margin-top: 15px;'>"
        + "<a href='javascript:void(0);' style='text-decoration: none; display: inline-block; line-height: 50px; min-width: 100px; padding: 0px 15px; border: 1px solid #a0a0a0; border-radius: 4px; color: #fff; background-color: #337ab7; border: 1px solid #2e6da4;'>" + closeText + "</a>"
        + "</div>"
        + "</div>"
        + "</div>";
    $(boxHtml).appendTo('body');
    $("#alert-box a").click(function () {
        $("#alert-box").remove();
        if (callback != null) callback();
    });
}

function getPara(url, name) {
    url = url + ""; // convert to string
    let array = url.split(/\?|&/);
    let i = 0;
    for (i = 1; i < array.length; i++) {
        if (array[i].split('=')[0].toLowerCase() == name.toLowerCase()) return array[i].split('=')[1];
    }
    return '';
}

function getParaCurr(name) {
    const url = document.location;
    return getPara(url, name);
}

function setPara(url, name, value) {
    url = url + ""; // convert to string
    let check = false;
    let isFirst = true;
    let ret = "";
    let array = url.split(/\?|&/);
    ret = ret + array[0];
    let i = 0;
    for (i = 1; i < array.length; i++) {
        let N = array[i].split('=')[0];
        let V = array[i].split('=')[1];
        if (N == name) {
            V = value;
            check = true;
        }
        ret = isFirst ? ret + "?" + N + "=" + V : ret + "&" + N + "=" + V;
        isFirst = false;
    }
    if (!check) ret = isFirst ? ret + "?" + name + "=" + value : ret + "&" + name + "=" + value;
    return ret;
}

function getOuterHtml(jqueryElement) {
    $('<div></div>').append(jqueryElement.clone()).html();
}

function resetQuestion() {
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

    fullQuestions = filterFunction 
    ? originalQuestions.filter(filterFunction)
    : (filterConditions[licenseType] === true ? originalQuestions : []);

    dangerQuestions = fullQuestions.filter(function (question) {
        return question.required > 0;
    })

}
function resetIndex() {

    if(isChooseDataSet(0)) {
        fullQuestions = fullQuestions.map(question => {
            const item = original94Questions.find(q => q.no === question.no);
            return item ?? question;
        });
    }

    if (license.code == "A1_2025") {
        fullQuestions = fullQuestions.map(function (question) {
            let item = { ...question }
            item.no = item.a1
            return item
        })
    }

    if (license.code == "A_2025") {
        fullQuestions = fullQuestions.map(function (question) {
            let item = { ...question }
            item.no = item.a2
            return item
        })
    }

    if (license.code == "B1_2025") {
        fullQuestions = fullQuestions.map(function (question) {
            let item = { ...question }
            item.no = item.a34
            return item
        })
    }
}

function resetTopic() {

    let numOfQuestion = fullQuestions.length
    let numOfTopic1 = fullQuestions.filter(function (question) { return question.topic == 1 }).length
    let numOfTopic2 = fullQuestions.filter(function (question) { return question.topic == 2 }).length
    let numOfTopic3 = fullQuestions.filter(function (question) { return question.topic == 3 }).length
    let numOfTopic4 = fullQuestions.filter(function (question) { return question.topic == 4 }).length
    let numOfTopic5 = fullQuestions.filter(function (question) { return question.topic == 5 }).length
    let numOfTopic6 = fullQuestions.filter(function (question) { return question.topic == 6 }).length
    let numOfTopic7 = fullQuestions.filter(function (question) { return question.topic == 7 }).length
    let numOfTopic8 = fullQuestions.filter(function (question) { return question.required > 0 }).length

    topics = [
        { "code": 0, "display": "Toàn bộ câu hỏi", "subTitle": `${numOfQuestion} câu`, "num": numOfQuestion },
        { "code": 1, "display": "Khái niệm và quy tắc giao thông", "subTitle": `${numOfTopic1} câu`, "num": numOfTopic1 },
        { "code": 2, "display": "Nghiệp vụ vận tải", "subTitle": `${numOfTopic2} câu`, "num": numOfTopic2 },
        { "code": 3, "display": "Văn hoá và đạo đức", "subTitle": `${numOfTopic3} câu`, "num": numOfTopic3 },
        { "code": 4, "display": "Kỹ thuật lái xe", "subTitle": `${numOfTopic4} câu`, "num": numOfTopic4 },
        { "code": 5, "display": "Cấu tạo và sữa chữa", "subTitle": `${numOfTopic5} câu`, "num": numOfTopic5 },
        { "code": 6, "display": "Biển báo và đường bộ", "subTitle": `${numOfTopic6} câu`, "num": numOfTopic6 },
        { "code": 7, "display": "Sa hình", "subTitle": `${numOfTopic7} câu`, "num": numOfTopic7 },
        { "code": 8, "display": "Câu liệt", "subTitle": `${numOfTopic8} câu`, "num": numOfTopic8 }];
}
