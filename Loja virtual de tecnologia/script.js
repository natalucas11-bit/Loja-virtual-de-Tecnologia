function entrar() {
    alert("Login realizado com sucesso!");
}

function cadastrar() {
    alert("Cadastro realizado com sucesso!");
}

function enviarContato() {

    let data = document.getElementById("dataNascimento").value;

    while (data.length != 10 || data[2] != "/" || data[5] != "/") {
        data = prompt("Digite a data no formato dd/mm/aaaa:");
    }

    let dia = parseInt(data.substring(0, 2));
    let mes = parseInt(data.substring(3, 5)) - 1;
    let ano = parseInt(data.substring(6, 10));

    let nascimento = new Date(ano, mes, dia);
    let hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (
        hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() == nascimento.getMonth() && hoje.getDate() < nascimento.getDate())
    ) {
        idade--;
    }

    if (idade < 18) {
        alert("Falha! Você precisa ter 18 anos ou mais para enviar a mensagem.");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
}