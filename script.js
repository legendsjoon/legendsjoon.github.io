$(document).ready(function () {
    $(".show-password").click(function () {
        if($("#password").attr("type")=="password"){
            $("#password").attr("type","text");
            $("#show-password").attr("src","Images/hide.png");
        }
        else{
            $("#password").attr("type","password");
            $("#show-password").attr("src","Images/show.png");
        }
    });
    $(".login-btn").click(function () { 
        if($("#password").attr("type")=="text"){
            $("#password").attr("type","password");
            $("#show-password").attr("src","Images/hide.png");
        }
    });
});