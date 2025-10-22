let persona = "Juan";
function suma (numero: number){
    return numero + numero
}
console.log(suma(10))
let numeroDuplicado: number = 0;
numeroDuplicado = suma(5) 

let numeroTexto: number | string = "0"; //De esta forma podemos decirque que pueden ser dos tipos
if(Math.random()> 0.5){
numeroTexto = 5
}else{
    numeroTexto = "5"
}
if(typeof numeroTexto === "number"){
Math.round(numeroTexto)
}

interface Perfil{
    nombre: string,
    apellido: string,
    numero?: number | undefined, //Para que no sea obligatorio o le pones la interrogacion o le pones el undefined
    telefono? : string
    tipoDomicilio: "casa" | "departamento"
}
const perfil: Perfil = {
    nombre: "Alejandro",
    apellido: "Molina",
    tipoDomicilio: "casa",
    numero: 7864334
}
if(perfil.telefono){
    perfil.telefono = perfil.telefono.replace(/\s+/g, '');
}
perfil.nombre = "Pepe"

