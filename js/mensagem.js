window.onload = function lerHora(){    
    tempo = new Date;
    hora = tempo.getHours()
    mes = parseInt(tempo.getMonth())+1;
    data = tempo.getDate() + "/" + mes + "/" + tempo.getFullYear();

    document.getElementById("data").innerHTML = data;

    if (hora >= 5 &&  hora < 12){
        document.getElementById("msgh").innerHTML = "Caro visitante, tenha um bom dia!";
    }
    
    else if (hora >= 12 &&  hora < 18){
        document.getElementById("msgh").innerHTML = "Caro visitante, tenha uma boa tarde!";
    }

    else{
        document.getElementById("msgh").innerHTML = "Caro visitante, tenha uma boa noite!";
    }


}