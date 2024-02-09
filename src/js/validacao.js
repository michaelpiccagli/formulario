const inputs = document.querySelectorAll(".input-text");
const formulario = document.getElementById("form");
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio")

inputs.forEach(inputText => {
    inputText.addEventListener("change", () => {
        if(inputText.value !== ""){
            inputText.classList.add("campo-preenchido");
        }else{
            inputText.classList.remove("campo-preenchido");
        }
    });
});

formulario.addEventListener('submit', event => {
    event.preventDefault();
    inputs.forEach((input, indice) => {
        if (input.value === "") {
            input.classList.add("campo-nao-preenchido");
            camposObrigatorios[indice].classList.remove("campo-obrigatorio");
        } else if (input.value !== ""){
            camposObrigatorios[indice].classList.add("campo-obrigatorio");
        }
    });
});