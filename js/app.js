var contatore = 0;

function riduci(){;
    if(contatore != 0){
        contatore--
    }
    document.getElementById("numero").innerHTML = contatore;
}
function aumenta(){
    contatore++;
    document.getElementById("numero").innerHTML = contatore;
}
