const botaoVerMais = document.querySelector("button");
const habilidades = document.querySelectorAll(".escondido");

function cliqueVer(e) {
  habilidades.forEach((elemento) => {
    if (elemento.classList.contains("escondido")) {
      elemento.classList.remove("escondido");
      elemento.classList.add("visivel");
      botaoVerMais.innerHTML = "Ver menos";
    } else {
      elemento.classList.add("escondido");
      elemento.classList.remove("visivel");
      botaoVerMais.innerHTML = "Ver mais";
    }
  });
}

function maisHabilidades(elemento) {
  elemento.addEventListener("click", cliqueVer);
}

maisHabilidades(botaoVerMais);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        alert("Email enviado com sucesso!");
        form.reset();
      } else {
        alert("Ocorreu um erro ao enviar o email. Tente novamente.");
      }
    })
    .catch((error) => {
      alert(
        "Falha ao enviar o email. Por favor, verifique sua conexão e tente novamente."
      );
    });

  return false;
}
