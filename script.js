//laço while 
var D = 0;
document.write('<br><h3>Loop com while</h3><br>');
while (D <= 16) {
    document.write('<br> O valor de D é: ' + D);
    D = D + 1;
}

//laço for 
var controle = 15;

document.write('<br><h3>Loop com for</h3><br>');
for (H = 0; H < controle; H++) {
    document.write('<br> O valor de H é: ' + H);
}

//laço switch 
function confirmar() {
    var valor = prompt("Digite a opção de 1 a 4");
     console.log(valor);
     console.log(typeof(valor));


    switch (Number(valor)) {
        case 1:
            alert("Iremos verificar seu numero cadastrado");
            break;
        case 2:
            alert("Você escolheu analizar o plano");
            break;
        case 3:
            alert("Entraremos com o processo de portabilidade");
            break;
        case 4:
            alert("Você está chamando o atendente");
            break;

        default:
            alert("Digite entre 1 e 4");
            break;
    }
}
