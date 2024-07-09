function check() {
    if (document.login.userid.value == "") {
        alert("Please Enter User ID");
        document.login.userid.focus();
        return false;
    }
    if (document.login.userpassword.value == "") {
        alert("Please Enter User Password");
        document.login.userpassword.focus();
        return false;
    }
    if (document.login.userpassword.value.length <= 5) {
        alert("Minimum input 6 characters for password");
        document.login.password.focus();
        document.login.password.select();
        return false;
    }
    if (document.login.repassword.value == "") {
        alert("Please Enter User Re-type Password");
        document.login.repassword.focus();
        return false;
    }
    if (document.login.repassword.value != document.login.userpassword.value) {
        alert("Passwords are not match");
        document.login.repassword.focus();
        document.login.repassword.select();
        return false;
    }
}