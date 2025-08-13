// seleciona os elementos do HTML (form e lista) atráves do ById
const form = document.getElementById("form");
const lista = document.getElementById("Lista");

//realiza o envio do formulário e impede o recarregamento da página
form.addEventListener("submit", function (evento) {
    evento.preventDefault();

//captura os valores digitados atráves do value e remova os espaços em branco no início e fim através do trim
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

//verifica se os campos estão vazios e se o e-mail está correto
    if (nome === "" || email === "" || !email.includes('@')) {
        alert("Preencha o nome e um e-mail válido!");
        return;

}

//cria um novo item e o adiciona na lista 
const item = document.createElement("li");
item.textContent = `${nome} - ${email}`;
lista.appendChild(item);

// limpa os campos para permitir uma nova inscrição
document.getElementById("nome").value = "";
document.getElementById("email").value = "";

});

