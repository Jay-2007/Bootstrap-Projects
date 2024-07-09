function correct() {
    if (document.main.name.value == "") {
        alert("Enter full name please");
        document.main.name.focus();
        return false;
    }
    if (!checkEmail(main.email.value)) {
        alert("Enter Valid E-mail Address");
        main.email.focus();
        main.email.select();
        return false;
    }
    if (main.mobile.value == "") {
        alert("Enter Your Contact Number");
        main.mobile.focus();
        return false;
    }
    if (!main.rdgen[0].checked && !main.rdgen[1].checked) {
        alert("Select proper gender");
        main.rdgen[0].focus();
        return false;
    }
    function checkEmail(myForm) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(main.email.value)) {
            return (true)
        }
        return (false)
    }
}