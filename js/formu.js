/* Validacion formulario  */
//! Elementos del DOM
const fName = document.querySelector("#name")
const fEmail = document.querySelector("#email")
const fSubject = document.querySelector("#subject")
const fMessage = document.querySelector("#message")

//! Submit
const formIsValid = () => {
    const nombre = fName.value
    const correo = fEmail.value
    const asunto = fSubject.value
    const mensaje = fMessage.value

    const regex = /^\S+@\S+\.\S+$/

    if (nombre.length === 0 || correo.length === 0 || asunto.length === 0 || mensaje.length === 0) {
        alert("El campo nombre está vacío, por favor completalo antes de enviar")
        return false
    }
    if (!regex.test(correo)) {
        alert("El correo que informás no es válido, lo chequeas?")
        return false
    }

    return true
}

document.querySelector("form").addEventListener("submit", e => {
    if (!formIsValid()) {
        e.preventDefault()
        return
    }

    let formContacto = document.forms["contacto"]
    let formData = new FormData(formContacto)

    const fetchConfig = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }
    fetch("/", fetchConfig)
        .then(() => console.log("Succeed."))
})