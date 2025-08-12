const form = document.getElementById("form");
const lista = document.getElementById("Lista");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "" || !email.includes('@')) {
        alert("Preencha o nome e um e-mail válido!");
        return;

}

const item = document.createElement("li");
item.textContent = `${nome} - ${email}`;
lista.appendChild(item);

document.getElementById("nome").value = "";
document.getElementById("email").value = "";

});

