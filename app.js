
var a = prompt ('digite a quantidade de participantes do sorteio') // aqui vai o valor limite de pessoas que irá participar do sorteio caso a pessoa digite 10 o sorteio vai de 0 até 10 pessoas e se for 1000 mesma coisa.


function sortear() {
    let n = Math.round( Math.random()*a ) //aqui o valor de 'a' entra na função para ser o limite de numero aleatorio 
    document.getElementById('valor').innerHTML = n 
}

