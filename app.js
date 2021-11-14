const nombre = document.getElementById(".namey");
const apellido = document.getElementById(".surnamey");
const email = document.getElementById(".emaily");
const codey = document.getElementById(".codey");
const loginy = document.querySelector(".login-btny");

if (nombre.value.length == 2 || apellido.value.length == 2 || email.value.indexOf("@") == -1) {
    loginy.classList.remove('input[type="submit"]')
    loginy.classList.add("red");
} else {
    loginy.classList.remove("red");
    loginy.classList.add("green");
}