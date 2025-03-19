app.controller("nd168Ctrl", function($scope) {
    var elementTop1 = 0;
    var elementTop2 = 0;
    var elementTop3 = 0;

    var hash1 = "";
    var hash2 = "";
    var hash3 = "";

    if (window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        var element = document.getElementsByName(hash)[0];
        element.style.backgroundColor = "#ffc69c"
        elementTop1 = element.offsetTop;


        if (hash.indexOf("diem_") >= 0) {

            var temp = hash.substring(hash.indexOf("_") + 1);
            var res1 = temp.substring(0, temp.indexOf("_"));
            temp = temp.substring(temp.indexOf("_") + 1);
            var res2 = temp.substring(0, temp.indexOf("_"));
            temp = temp.substring(temp.indexOf("_") + 1);
            var res3 = temp;

            hash2 = "khoan_" + res1 + "_" + res2;
            var element = document.getElementsByName(hash2)[0];
            element.style.backgroundColor = "#ffc69c"
            elementTop2 = element.offsetTop;

            hash3 = "dieu_" + res1;
            var element = document.getElementsByName(hash3)[0];
            element.style.backgroundColor = "#ffc69c"
            elementTop3 = element.offsetTop;

            if (res3 == "dd") {
                res3 = "đ";
            }
            document.getElementById("hash1").innerHTML = "Điểm " + res3;
            document.getElementById("hash2").innerHTML = "Khoản " + res2;
            document.getElementById("hash3").innerHTML = "Điều " + res1;
        }
        if (hash.indexOf("khoan_") >= 0) {

            var temp = hash.substring(hash.indexOf("_") + 1);
            var res1 = temp.substring(0, temp.indexOf("_"));
            temp = temp.substring(temp.indexOf("_") + 1);
            var res2 = temp;


            hash2 = "dieu_" + res1;
            var element = document.getElementsByName(hash2)[0];
            element.style.backgroundColor = "#ffc69c"
            elementTop2 = element.offsetTop;

            document.getElementById("hash1").innerHTML = "Khoản " + res2;
            document.getElementById("hash2").innerHTML = "Điều " + res1;
            document.getElementById("hash3").style.display = "none";
        }
        if (hash.indexOf("dieu_") >= 0) {

            var temp = hash.substring(hash.indexOf("_") + 1);

            document.getElementById("hash1").innerHTML = "Điều " + temp;
            document.getElementById("hash2").style.display = "none";
            document.getElementById("hash3").style.display = "none";
        }
    }
});