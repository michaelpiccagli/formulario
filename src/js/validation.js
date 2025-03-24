const inputs = document.querySelectorAll(".input-text");
const formulario = document.getElementById("form");
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");

inputs.forEach((input, indice) => {
    input.addEventListener("change", () => {
        if (input.value.trim() !== "") {
            input.classList.add("campo-preenchido");
            input.classList.remove("campo-nao-preenchido");
            camposObrigatorios[indice].classList.remove("ativo");
        } else {
            input.classList.remove("campo-preenchido");
        }
    });
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let formularioValido = true;

    inputs.forEach((input, indice) => {
        if (input.value.trim() === "") {
            input.classList.add("campo-nao-preenchido");
            camposObrigatorios[indice].classList.add("ativo");
            formularioValido = false;
        } else {
            input.classList.remove("campo-nao-preenchido");
            camposObrigatorios[indice].classList.remove("ativo");
        }
    });

    if (formularioValido) {
        alert("Formulário enviado com sucesso!");
        formulario.reset();
        inputs.forEach((input) => input.classList.remove("campo-preenchido"));
    }
});
