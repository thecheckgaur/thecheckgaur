
function validateForm() {
    var name = document.getElementById("phone")
    var error = document.getElementById("phoneerror")
    if (name.value.length >= 9) {
        error.innerHTML = "Not Valid"
        alert("Name must be filled out");
        return false;
    }
    else {
        alert("Thank You I'll Connect with you soon.")
        return true
    }
}