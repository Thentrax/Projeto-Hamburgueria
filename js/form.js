function calculaValor(){
     produto = document.getElementById("produto");
     prepro = 0;

    if(produto.value == "bacon"){
        prepro = 20;
    }
    else if(produto.value == "salada"){
        prepro = 25;
    }
    else if(produto.value == "tudo"){
        prepro = 35;
    }

    quant = document.getElementById("qt").value;
    
    valor = 0;
    valor = prepro * quant;

    display = "R$" + valor + ",00";

    document.getElementById("custo").innerHTML = display;
    
}

function pedir(){
    nome = document.getElementById("nome").value;
    produto = document.getElementById("produto").value;
    qt = document.getElementById("qt").value;
    pag = document.getElementById("pag").value;

    if(nome == "" || produto == "" || qt== "" || pag== ""){
        alert("Preencha os dados de forma adequada!");
    }
    else{
        alert("Pedido anotado! Aguarda aí que já já chega!");
    }
}