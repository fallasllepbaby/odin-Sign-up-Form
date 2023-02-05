function validateForm() {
    const pw1 = document.getElementById("password").value;
    const pw2 = document.getElementById("confirm_password").value;

    if (pw1 != pw2) {
        alert("Passwords don't match!");
        return false;
    } else {
        document.write("You have registed successfully");
    }  
}

