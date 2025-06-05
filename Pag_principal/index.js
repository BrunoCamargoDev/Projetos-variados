//estudo de javascript sem armazenamento de dados

document.getElementById("enviar").onclick = function (event) {
  event.preventDefault(); // evita o envio do formulário

  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (email === "teste@" && senha === "teste") { // email e senha apenas para testes, este sistema não armazena dados!
    exibir();
  } else if (email === "" && senha === "") { 
    vazio();
  }
   else {
    naoachei();
  }
};

function exibir() {
  alert("Usuário encontrado!");
  window.location.href = "../pag2/pag2.html"
}

function vazio() {
  alert("Campos vazios! Digite seus dados.");
}

function naoachei() {
  alert("Não pude encontrar seus dados");
}
