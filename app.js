const resultado        = document.querySelector('#resultados');
const jugadores        = document.querySelector('#jugadores');
const opciones         = ['piedra', 'papel', 'tijera'];

const numerodeClicks = (e) => {
    getResults(e.target.innerHTML, opciones[Math.floor(Math.random() * opciones.length)]);
}

opciones.forEach(opcion => {
    const button = document.createElement('button')
    button.innerHTML = opcion
    button.addEventListener('click', numerodeClicks)
    jugadores.appendChild(button)

})

const getResults = (usuario, computadora) => {
    switch ( usuario + computadora ) {
        case 'tijerapapel':
        case 'piedratijera':
        case 'papelpiedra':
            resultado.innerHTML = '<h4>Tú elegiste: </h4>' + usuario + '<h4> La computadora: </h4>' + computadora + '<h1> GANASTE! 😁</h1>'
            break
        case 'papeltijera':
        case 'tijerapiedra':
        case 'piedrapapel':
            resultado.innerHTML = '<h4>Tú elegiste: </h4>' + usuario + '<h4> La computadora: </h4>' + computadora + '<h1> BUUU, PERDISTE! 😫</h1>'
            break
        case 'tijeratijera':
        case 'piedrapiedra':
        case 'papelpapel':
            resultado.innerHTML = '<h4>Tú elegiste: </h4>' + usuario + '<h4> La computadora: </h4>' + computadora + '<h1> EMPATE! 😒</h1>'
            break
    }
}