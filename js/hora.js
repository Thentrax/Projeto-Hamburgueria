tempo = new Date;
hora = tempo.getHours();
minutos = tempo.getMinutes();

if (minutos < 10){
    minutos = "0"+tempo.getMinutes();
}
else{
    minutos = minutos;
}

hcomp = hora + ":" + minutos;

if (hora >= 11 &&  hcomp < 12){
    document.getElementById("hmsg").innerHTML = hcomp + "A	Loja	aberta	– Venha	e	faça	agora	mesmo	o	seu	pedido.";
}
    
else if (hora >= 12 &&  hora < 19){
    document.getElementById("hmsg").innerHTML = hcomp + "A Loja aberta – Venha e faça agora	mesmo o seu pedido. – Promoção do dia: Super X Bacon + Refri Lata	– R$	10,99";
}

else if (hora >= 19 && hora < 22){
    document.getElementById("hmsg").innerHTML = hcomp + " Quer pedir seu lanche	em casa? Já	estamos	aceitando pedidos.";
}

else{
    document.getElementById("hmsg").innerHTML = hcomp + " Fim do Expediente. Te esperamos amanhã novamente"
}
