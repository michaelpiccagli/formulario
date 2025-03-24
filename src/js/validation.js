const inputs = document.querySelectorAll(".input-text");
const formulario = document.getElementById("form");

inputs.forEach((input) => {
    input.addEventListener("change", () => {
        const campoObrigatorio = input.nextElementSibling;
        if (input.value.trim() !== "") {
            input.classList.add("campo-preenchido");
            input.classList.remove("campo-nao-preenchido");
            campoObrigatorio.classList.remove("ativo");
        } else {
            input.classList.remove("campo-preenchido");
        }
    });
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let formularioValido = true;

    inputs.forEach((input) => {
        const campoObrigatorio = input.nextElementSibling;
        if (input.value.trim() === "") {
            input.classList.add("campo-nao-preenchido");
            campoObrigatorio.classList.add("ativo");
            formularioValido = false;
        } else {
            input.classList.remove("campo-nao-preenchido");
            campoObrigatorio.classList.remove("ativo");
        }
    });

    if (formularioValido) {
        alert("Formulário enviado com sucesso!");
        formulario.reset();
        inputs.forEach((input) => {
            input.classList.remove("campo-preenchido");
            input.nextElementSibling.classList.remove("ativo");
        });
    }
});
