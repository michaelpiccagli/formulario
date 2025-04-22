const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function (numeros) {
  let input = numeros.target.value;

  // Remove tudo que não for número
  input = input.replace(/\D/g, "");

  // Aplica a máscara
  if (input.length > 0) input = "(" + input;
  if (input.length > 3) input = input.slice(0, 3) + ") " + input.slice(3);
  if (input.length > 10) input = input.slice(0, 10) + "-" + input.slice(10, 15);
  if (input.length > 15) input = input.slice(0, 15);

  e.target.value = input;
});

const inputs = document.querySelectorAll(".input-text");
const formulario = document.getElementById("form");

// Validação ao mudar valor dos inputs
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

// Validação no envio do formulário
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let formularioValido = true;

    inputs.forEach((input) => {
        const campoObrigatorio = input.nextElementSibling;

        // Campo vazio
        if (input.value.trim() === "") {
            input.classList.add("campo-nao-preenchido");
            campoObrigatorio.classList.add("ativo");
            campoObrigatorio.textContent = "campo obrigatório";
            formularioValido = false;

        // Validação do telefone
        } else if (input.id === "telefone") {
            const numerosTelefone = input.value.replace(/\D/g, "");
            if (numerosTelefone.length !== 11) {
                input.classList.add("campo-nao-preenchido");
                campoObrigatorio.classList.add("ativo");
                campoObrigatorio.textContent = "telefone inválido (ex: (11) 91234-5678)";
                formularioValido = false;
            } else {
                input.classList.remove("campo-nao-preenchido");
                campoObrigatorio.classList.remove("ativo");
                campoObrigatorio.textContent = "campo obrigatório";
            }

        // Validação de e-mail
        } else if (input.id === "email") {
            const email = input.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                input.classList.add("campo-nao-preenchido");
                campoObrigatorio.classList.add("ativo");
                campoObrigatorio.textContent = "e-mail inválido (ex: exemplo@dominio.com)";
                formularioValido = false;
            } else {
                input.classList.remove("campo-nao-preenchido");
                campoObrigatorio.classList.remove("ativo");
                campoObrigatorio.textContent = "campo obrigatório";
            }

        // Outros campos válidos
        } else {
            input.classList.remove("campo-nao-preenchido");
            campoObrigatorio.classList.remove("ativo");
            campoObrigatorio.textContent = "campo obrigatório";
        }
    });

    // Envio com sucesso
    if (formularioValido) {
        alert("Formulário enviado com sucesso!");
        formulario.reset();

        inputs.forEach((input) => {
            input.classList.remove("campo-preenchido", "campo-nao-preenchido");
            const campoObrigatorio = input.nextElementSibling;
            campoObrigatorio.classList.remove("ativo");
            campoObrigatorio.textContent = "campo obrigatório";
        });
    }
});