const nombre = document.getElementById("namey");
const apellido = document.getElementById("surnamey");
const email = document.getElementById("emaily");
const codey = document.getElementById("codey");
const loginy = document.querySelector(".login-btny");
const nameyMessageError = document.querySelector(".nameyMessageError");
const surnameyMessageError = document.querySelector(".surnameyMessageError");
const emailyMessageError = document.querySelector(".emailyMessageError");
const codeyMessageError = document.querySelector(".codeyMessageError");

function nameyConfirm(e) {
    if (namey.value.length < 3 ||
        namey.value.length > 9 &&
        namey.value == " ") {
        console.log("Name doesn't work")
        e.preventDefault()
        nameyMessageError.innerHTML = "Tu nombre debe poseer entre 3 y 9 caracteres"
        nameyMessageError.classList.add("error")
        namey.focus()
    } else {
        console.log("Name works")
        nameyMessageError.innerHTML = " "
    }
}

function surnameyConfirm(e) {
    if (surnamey.value.length < 3 ||
        surnamey.value.length > 9 ||
        surnamey.value == " ") {
        console.log("Surname doesn't work")
        e.preventDefault()
        surnameyMessageError.innerHTML = "Tu apellido debe poseer entre 3 y 9 caracteres"
        surnameyMessageError.classList.add("error")
        surnamey.focus()
    } else {
        console.log("Surname works")
        surnameyMessageError.innerHTML = " "
    }
}

function emailyConfirm(e) {
    let emailValue = email.value
    let mailCharacters = [/@/g, /./g, /yahoo/g, /es/g]

    if (email.value.length > 6 &&
        email.value.length < 20) {
        console.log("Email works")
        emailyMessageError.innerHTML = " "
    } else {
        console.log("Email doesn't work")
        e.preventDefault()
        emailyMessageError.innerHTML = "Inserte un código entre 6 y 9 caracteres"
        emailyMessageError.classList.add("error")
    }

}

function codeyConfirm(e) {
    if (codey.value.length < 6 ||
        codey.value.length > 9) {
        console.log("Code doesn't work")
        e.preventDefault()
        codeyMessageError.innerHTML = "Inserte un código entre 6 y 9 caracteres"
        codeyMessageError.classList.add("error")
    } else {
        console.log("Code works")
        codeyMessageError.innerHTML = " "
    }
}

function allConfirm(e) {
    if (nameyMessageError.innerHTML === " " &&
        surnameyMessageError.innerHTML === " " &&
        emailyMessageError.innerHTML === " " &&
        codeyMessageError.innerHTML === " ") {
        console.log("Function worked")
        window.alert(`Usuario validado \r\n Bienvenida  ${nombre.value} ${apellido.value} `)
    }
}

loginy.addEventListener("click", (e) => {
    nameyConfirm(e)
    surnameyConfirm(e)
    emailyConfirm(e)
    codeyConfirm(e)
    allConfirm(e)
});

// Agregar nombres y apellidos en la ventana de alerta y conectarlo con algo más
/*
${ nombre }
${ apellido } */