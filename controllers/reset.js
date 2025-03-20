app.controller("resetCtrl", function ($scope) {
    $scope.reset = function () {
        const licenseCode = localStorage.getItem("is_license") ?? "B_2025"
        localStorage.clear();
        localStorage.setItem("is_license", licenseCode)
        localStorage.setItem("is_data_set", 0)
        license = fullLicenses.filter(function(lic){return lic.code==(localStorage.getItem("is_license")?localStorage.getItem("is_license"):licenseCode)})[0]
        toastr.success("Khôi phục dữ liệu thành công!");
        resetQuestion()
        resetIndex()
        window.location = "#!index";
    }
});