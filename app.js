//Sorteo
// Se ingresan los nombres de los participantes y se elige uno de manera random
//Se muestra en la pagina la lista de los participantes y un mensaje con el nombre del ganador
let participantes = [];
let ganador;



const selGanador = (max)=>{
    min = Math.ceil(0);
    max = Math.floor(max);
    let index = Math.floor(Math.random() * (max - min + 1) + min);
    ganador = participantes[index];
}

let nombre = prompt("Ingrese el nombre de un participante");
while(nombre == ""){
    nombre = prompt("Debe ingresar el nombre de un participante");
}
participantes.push(nombre);

for (let i = 0; i < 4; i++) {
    while(nombre == ""){
        nombre = prompt("Debe ingresar el nombre de un participante");
    } 
    nombre = prompt("Ingrese el nombre de otro participante"); 
    participantes.push(nombre); 
}

let lista = document.getElementById("lista");

for (const participante of participantes){
    let li = document.createElement('li');
    li.innerHTML = participante
    lista.appendChild(li);
}
selGanador(participantes.length);
let mensaje = `Felicitaciones <b>${ganador.toUpperCase()}</b>, te ganaste un reproductor de MP3 con 512mb de memoria y radio FM incluida`

let resultado = document.getElementById('msg');

let p = document.createElement('p');
p.innerHTML = mensaje;
resultado.append(p);
