function enableButton() {
    $("#register-btn").removeAttr("disabled");
    $(".register-btn input").toggleClass("hover");
    $(".register-btn input").removeClass("disabled");
}

function disableButton() {
    $("#register-btn").prop("disabled", true);
    $(".register-btn input").toggleClass("hover");
    $(".register-btn input").addClass("disabled");
}

function checkFName() {
    if ($("#fname").val() == "") {
        $("#check-fname").text("Vui lòng nhập tên!");
        return false;
    }
    else {
        $("#check-fname").text("");
        return true;
    }
}

function checkLName() {
    if ($("#lname").val() == "") {
        $("#check-lname").text("Vui lòng nhập họ và tên đệm!");
        return false;
    }
    else {
        $("#check-lname").text("");
        return true;
    }
}

function checkEmail() {
    if ($("#email").val() == "") {
        $("#check-email").text("Vui lòng nhập email!");
        return false;
    }
    else {
        var email = $("#email").val();
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            $("#check-email").text("Email không hợp lệ!");
            return false;
        }
        else {
            $("#check-email").text("");
            return true;
        }
    }
}

function checkUserName() {
    if ($("#username").val() == "") {
        $("#check-username").text("Vui lòng nhập tên tài khoản!");
        return false;
    }
    else {
        var username = $("#username").val();
        var re = /^[a-z0-9]+$/;
        if (!re.test(username)) {
            $("#check-username").text("Tên tài khoản không đúng!");
            return false;
        }
        else {
            $("#check-username").text("");
            return true;
        }
    }
}

function checkBirthday() {
    if ($("#birthday").val() == "") {
        $("#check-birthday").text("Vui lòng chọn ngày sinh!");
        return false;
    }
    else {
        $("#check-birthday").text("");
        return true;
    }
}

function checkGender() {
    if ($("#gender").val() == null) {
        $("#check-gender").text("Vui lòng chọn giới tính!");
        return false;
    }
    else {
        $("#check-gender").text("");
        return true;
    }
}

function checkCountry() {
    if ($("#country").val() == null) {
        $("#check-country").text("Vui lòng chọn quốc gia!");
        return false;
    }
    else {
        $("#check-country").text("");
        return true;
    }
}

function checkProvince() {
    if ($("#province").val() == null) {
        $("#check-province").text("Vui lòng chọn tỉnh thành!");
        return false;
    }
    else {
        $("#check-province").text("");
        return true;
    }
}

function checkPassword() {
    if ($("#password").val() == "") {
        $("#check-password").text("Vui lòng nhập mật khẩu");
        return false;
    }
    else {
        $("#check-password").text("");
        var password = $("#password").val();
        if (password.length < 8) {
            $("#check-password").text("Mật khẩu tối thiểu 8 ký tự!");
            return false;
        }
        else {
            $("#check-password").text("");
            var rel = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!rel.test(password)) {
                $("#check-password").text("Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặt biệt!");
                return false;
            }
            else {
                $("#check-password").text("");
                return true;
            }
        }
    }
}

function checkConfirmPassword() {
    if ($("#password").val() != $("#confirm-password").val()) {
        $("#check-confirm-password").text("Mật khẩu không khớp");
        return false;
    }
    else {
        $("#check-confirm-password").text("");
        return true;
    }
}

function checkValid() {
    if (checkFName() && checkLName() && checkEmail() && checkUserName() && checkBirthday() && checkGender() && checkCountry() && checkProvince() && checkPassword() && checkConfirmPassword()) {
        enableButton();
    }
    else {
        disableButton();
    }
}

$(document).ready(function () {
    $("#country").change(function () {
        $("#province").removeAttr("disabled");
    });
    $("[id=show-password]").click(function () {
        if ($("#password").attr("type") == "password") {
            $("#password").attr("type", "text");
            $("#confirm-password").attr("type", "text");
            $("[id=show-password]").attr("src", "../Images/hide.png");
        }
        else {
            $("#password").attr("type", "password");
            $("#confirm-password").attr("type", "password");
            $("[id=show-password]").attr("src", "../Images/show.png");
        }
    });
    $("#register-btn").mouseenter(function () {
        checkValid();
    });
})