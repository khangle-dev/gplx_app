app.controller("settingCtrl", function ($scope) {
    $scope.list = fullLicenses
    $scope.chooseLicense = function (licenseCode) {
        license = fullLicenses.filter(function(license){return license.code == licenseCode})[0]
        chooseLicense(license.code)
        
        const licenseType = localStorage.getItem("is_license");
        const filterConditions = {
            "A1_2025": (question) => question.a1 > 0,
            "A_2025": (question) => question.a2 > 0,
            "B1_2025": (question) => question.b1 > 0,
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

        const filterRequiredConditions = {
        "A1_2025": (question) => question.required1 > 0,
        "A_2025": (question) => question.required1 > 0,
        "B1_2025": (question) => question.required2 > 0,
        "B_2025": (question) => question.required3 > 0,
        "C1_2025": (question) => question.required3 > 0,
        "C_2025": (question) => question.required3 > 0,
        "D1_2025": (question) => question.required3 > 0,
        "D2_2025": (question) => question.required3 > 0,
        "D_2025": (question) => question.required3 > 0,
        "D2_2025": (question) => question.required3 > 0,
        "D_2025": (question) => question.required3 > 0,
        "BE_2025": (question) => question.required3 > 0,
        "C1E_2025": (question) => question.required3 > 0,
        "CE_2025": (question) => question.required3 > 0,
        "D1E_2025": (question) => question.required3 > 0,
        "D2E_2025": (question) => question.required3 > 0,
        "DE_2025": (question) => question.required3 > 0
        };

        const filterRequiredFunction = filterRequiredConditions[licenseType]
        dangerQuestions = fullQuestions.filter(filterRequiredFunction)

        resetIndex()
    };

    $scope.isChoose = function (licenseCode) {
        return isChooseLicense(licenseCode)
    };
});
