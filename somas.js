function s1(){
    var soma1 = document.getElementById("soma1").value;
    var soma2 = document.getElementById("soma2").value;
    var soma3 = document.getElementById("soma3").value;
    var soma4 = document.getElementById("soma4").value;
    //aqui vai ter o resultado
    var resultado1 = (Number(soma1) + Number(soma2) + Number(soma3) + Number(soma4)) / 4;
    if (resultado1 >= 7) {
        document.getElementById("somas1").innerHTML = 'você passou';
    } else {
        document.getElementById("somas1").innerHTML = 'você não passou';
    }
}
//aqui vai ter as somas de matemática
function s2(){
    var soma5 = document.getElementById("soma5").value;
    var soma5 = document.getElementById("soma6").value;
    var soma5 = document.getElementById("soma7").value;
    var soma5 = document.getElementById("soma8").value;
    //aqui vai ter o resultado
    var resultado = (Number(soma5) + Number(soma6) + Number(soma7) + Number(soma8)) / 4 ; 
    if (resultado2 >= 7) {
        var respo = document.getElementById("somas2").innerHTML = 'você passou';
    } else {
        var respo = document.getElementById("somas2").innerHTML = 'você não passou';
    }
}
//aqui vai ter as somas de Historia
