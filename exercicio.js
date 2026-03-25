let user = [
    {id:"6186090", rua :"Rua vicente José de Santana", bairro:"Jardim São Pedro", cidade:"Osasco", estado:"SP"},
    {id:"5319075", rua :"Av. Queiroz Filho", bairro:"Alto dos pinheiros", cidade:"São Paulo", estado:"SP"},
    {id:"1310100", rua :" Av. Paulista", bairro:"Campo Belo", cidade:"São Paulo", estado:"SP"},
];

function buscarCep() {
    let idDigitando = document.getElementById("idCep").value;
    let userEncontrado = user.find((u)=> u.id == idDigitando);
    if (userEncontrado) {
        document.getElementById("rua").innerText = userEncontrado.rua;
        document.getElementById("bairro").innerText = userEncontrado.bairro;
        document.getElementById("cidade").innerText = userEncontrado.cidade;
        document.getElementById("estado").innerText = userEncontrado.estado;
    } else {
        document.getElementById("rua").innerText = "User not found";
        document.getElementById("bairro").innerText = "User not found";
        document.getElementById("cidade").innerText = "User not found";
        document.getElementById("estado").innerText = "User not found";
    
    }
}