//Mi nombre
const mi_nombre = "Alejandro";

//Mi edad
var mi_edad = 25;

//Desarrollador?
var eres_desarrollador=false; //Todavia no :P

//Mi fecha de nacimiento
const fecha_nacimiento= new Date("july 10 1996");

//Mi libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const mi_libro = {
    titulo: "El que susurra en la oscuridad",
    autor: "H.P. Lovecraft",
    fecha: new Date("august 1931"),
    url: "https://es.wikipedia.org/wiki/El_que_susurra_en_la_oscuridad"
}

const sobre_mi= new Array (mi_nombre, mi_edad, eres_desarrollador, fecha_nacimiento, mi_libro)
console.log(sobre_mi)