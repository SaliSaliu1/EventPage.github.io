function check() {
    let name = document.getElementById("name")
    let surname = document.getElementById("surname")
    let email = document.getElementById("email")
    let message = document.getElementById("message")

    if (name.value === "") {
        alert("Please add a name")
    } else if ((name.value.length > 8) || (name.value.length <= 3)) {
        alert("Error your name must have 3 characters at least and be shorter than 8")
    } else if (surname.value === "") {
        alert("Please add a surname")
    } else if ((surname.value.length > 8) || (surname.value.length <= 3)) {
        alert("Error your surname must have 3 characters at least and be shorter than 8")
    } else if (message.value === "") {
        alert("Please add a message")
    }


}