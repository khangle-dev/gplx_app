app.controller("checkCtrl", function ($scope, $sce, $interval) {
    $scope.bienso = ""
    $scope.loaixe = "1"
    $scope.result = ""

    $scope.countTime = 0

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
            $interval.cancel($scope.promise)
            $scope.countTime = 0
            $scope.result = $sce.trustAsHtml(response)
            $scope.$apply();
        });
        
        $scope.promise = $interval(function() {
            $scope.countTime++
            
            if ($scope.countTime > 0) {
                $scope.result = "<center>Đang kết nối dữ liệu</br>Xin chờ trong giây lát...</center>"
            }
    
            if ($scope.countTime >= 12) {
                $scope.result = "<center><p><span style='color:#ec3700'>Đang có rất đông lượt tìm kiếm</br>xin chờ trong giây lát...</span></p><p>⏰ Khoảng thời gian tra cứu tốt và chính xác nhất từ 18h tối đến 6h sáng</p></center>"
            }

            if ($scope.countTime >= 18) {
                $interval.cancel($scope.promise)
                $scope.countTime = 0
                $scope.result = "<center><p><span style='color:#ec3700'>Không thể kết nối dữ liệu</br>Vui lòng thử lại sau</span></p><p>⏰ Khoảng thời gian tra cứu tốt và chính xác nhất từ 18h tối đến 6h sáng</p></center>"
            }
    
        }, 1000, $scope.countTime)
    };

    $scope.$on('$destroy', () => {
        $interval.cancel($scope.promise)
        $scope.countTime = 0
    })
})