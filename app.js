const nombre = document.getElementById("namey");
const apellido = document.getElementById("surnamey");
const email = document.getElementById("emaily");
const codey = document.getElementById("codey");
const loginy = document.querySelector(".login-btny");
const messageError = document.querySelector(".messageError");


loginy.addEventListener("click", (e) => {
    if (codey.value.length < 6 || codey.value.length > 9) {
        console.log("Doesn't work")
        e.preventDefault()
        codey.select()
        messageError.innerHTML = "Inserte un código entre 6 y 9 caractéres"
        messageError.classList.add("error")
        loginy.classList.remove("greenBtn")
        loginy.classList.add("redBtn")
    } else {
        console.log("It works")
        messageError.innerHTML = " "
        loginy.classList.remove("redBtn")
        loginy.classList.add("greenBtn")
        window.alert("Usuario validado. Inserte el siguiente")
    }
});


if (email.focus() === true) {
    loginy.classList.remove("redBtn")
}