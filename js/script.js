$("#phone").mask("(99) 9 9999-9999");

var prod = [
    {id: 1, name: "Bife com batata", price: 30.0},
    {id: 2, name: "Coxa de frango crocante", price: 25.0},
    {id: 3, name: "Carne de panela", price: 22.0},
    {id: 4, name: "Farofa", price: 10.0},
    {id: 5, name: "Salada", price: 8.0},
    {id: 6, name: "Torresmo", price: 12.0}
]

function calc() {
    var quantities  = document.getElementsByName("quantity");
    var output      = document.getElementById("output");
    var total       = 0;

    output.innerHTML = "";
   
    
    for (var input of quantities) {
        output.innerHTML += `Prato: ${prod[input.id-1].name} - Valor parcial: ${parseFloat(input.value)*prod[input.id-1].price} </br>`;
        total            += parseFloat(input.value)*prod[input.id-1].price;
    }

    output.innerHTML += `<h2>Total: ${total}</h2>`;
}