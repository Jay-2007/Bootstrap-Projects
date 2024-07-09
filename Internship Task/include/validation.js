function check() {
    if (document.frm.name.value == "") {
        alert("Enter full name please");
        document.frm.name.focus();
        return false;
    }
    if (!checkEmail(frm.email.value)) {
        alert("Enter Valid E-mail Address");
        frm.email.focus();
        frm.email.select();
        return false;
    }
    if (frm.mobile.value == "") {
        alert("Enter Your Contact Number");
        frm.mobile.focus();
        return false;
    }
    if (frm.password.value == "") {
        alert("Input Password");
        frm.password.focus();
        return false;
    }
    if (frm.password.value.length <= 5) {
        alert("Minimum input 6 characters");
        frm.password.focus();
        frm.password.select();
        return false;
    }
    if (frm.repassword.value == "") {
        alert("Input Confirm Password");
        frm.repassword.focus();
        return false;
    }
    if (frm.repassword.value != frm.password.value) {
        alert("Passwords are not match");
        frm.repassword.focus();
        frm.repassword.select();
        return false;
    }
    if (!frm.rdgen[0].checked && !frm.rdgen[1].checked) {
        alert("Select proper gender");
        frm.rdgen[0].focus();
        return false;
    }
    if (frm.edu.selectedIndex == 0) {
        alert("Select proper option");
        frm.edu.focus();
        return false;
    }
    function checkEmail(myForm) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frm.email.value)) {
            return (true)
        }
        return (false)
    }
}