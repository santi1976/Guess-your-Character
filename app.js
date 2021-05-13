/*  Tu nombre Universo Tolkien
Creá una función que devuelva tu nombre en "Tolkien" basada en la fecha de tu cumpleaños 
(se asume que la fecha recibida es una fecha válida) y tu nombre. Las reglas para la conversión son las siguientes:
 */

// Nombre -> Tu nombre de atrás hacia adelante
let submit = document.querySelector("#submit")
let nombre = document.querySelector("#nombre")
let nombreReves;
function reversarNombre() {
   
    nombreR = nombre.value.split("").reverse().join("") //Reversa el valor ingresado en campo nombre
    nombreReves = nombreR.charAt(0).toUpperCase() + nombreR.substring(1).toLowerCase() // Convierte todas las letras a minúscula excepto la primera en mayúscula.
   if (validarFecha() && fraseSegunAno() && nombreReves != false) { 
          console.log("todo piola kee")
         
          return true
    } else {
        alert("Los datos ingresados son incorrectos o posee campos incompletos")
        //console.log("falla funcion reversar nombre")
        return false
    } 

}
submit.addEventListener('click', function(){
    reversarNombre();
    armarPersonaje();
    if(frase.length > 0){
    mostrarPersonaje()
    } 

})


///////////////////////////////////////////////////////////////
//Lógica de Fecha válida

//Evalúa si es año bisiesto
function esBisiesto() {
    if ((0 === numAño % 4) && (0 !== numAño % 100) || (0 === numAño % 400)) {
        return true
    } else {
        return false
    }
}
//Evalúa meses con distintos días
let meses31 = [1, 3, 5, 7, 8, 10, 12]; // meses con 31 días
let meses30 = [4, 6, 9, 11]; // meses con 30 días
let meses28 = [2]; // único mes con 28 días, a no ser que sea bisiesto (29)
let fechaValida;
function validarFecha() {
    let fechaValida =
        (meses31.indexOf(numMes) !== -1 && numDia <= 31) ||
        (meses30.indexOf(numMes) !== -1 && numDia <= 30) ||
        (meses28.indexOf(numMes) !== -1 && numDia <= 28) ||
        (meses28.indexOf(numMes) !== -1 && numDia <= 29 && esBisiesto());
    return fechaValida;
}

// Detecta dia e imprime característica del personaje y un atributo numérico para la lógica 
let ingresoDia = document.querySelector('#dia')
function valorDia() {
    let selectedDia = ingresoDia.options[ingresoDia.selectedIndex];
    let attrVal = selectedDia.value
    let attrValNum = selectedDia.dataset.attrVal
    numDia = Number(attrValNum);
    descDia = attrVal;
    

}
ingresoDia.addEventListener('input', valorDia);


// Detecta mes e imprime característica del personaje y un atributo numérico para la lógica 
let mes = document.querySelector("#mes")
let numMes;
function valorMes() {
    let selectedMes = mes.options[mes.selectedIndex];
    let attrValNum = selectedMes.dataset.attrVal
    numMes = Number(attrValNum)
    descMes = selectedMes.value
    
}
mes.addEventListener('input', valorMes);


///////////////////////////////////////////////////////////////////////////////////
// Muestra el último número del año y matchea con index de array
let frasesLord = {
    1: 'Si con mi vida, o con mi muerte puedo protegerte, lo haré… cuenta con mi espada, y con mi arco y con mi hacha” – Aragorn, Legolas y Gimbli',
    2: 'Un mago nunca llega tarde, ni pronto, llega exactamente cuando se lo propone” – Gandalf el Gris.',
    3: 'Hasta la persona mas pequeña puede cambiar el curso del futuro” – Dama Galadriel',
    4: 'No conozco a la mitad de vosotros ni la mitad de lo que desearía, y lo que deseo es menos de la mitad de lo que la mitad merecéis.”. – Bilbo Bolsón',
    5: 'Los Hobbits son criaturas sorprendentes, puedes aprender todas sus costumbres en un mes, y después de cien años, aún te sorprenden.” – Gandalf el Gris',
    6: '¡Llegada es la hora! ¡Jinetes de Rohan, os ata un juramento! ¡Dadle ahora cumplimiento! ¡Por el Rey, y la tierra!” – Éomer, capitán de Rohan.',
    7: 'Es peligroso, Frodo, cruzar tu puerta. Pones un pie en el camino, y si no cuidas tus pasos, nunca sabes a dónde te puede llevar.” – Gandalf el Gris.',
    8: 'No es más que la sombra de una ilusión lo que amas. No puedo darte lo que anhelas” – Aragorn',
    9: 'Coraje despierta ahora por ira holocausto y rojo amanecer” – Theoden, Rey de Rohan.',
    0: '¡Legolas! ¡¿Qué ven tus ojos de elfo?” – Aragorn'
}

// Detecta año para evaluar si es Bisiesto y guarda en Frase de acuerdo a último número del año.
let año = document.getElementById('año')
function fraseSegunAno() {
    for (let key in frasesLord) {
        key = año.value[3]
        selectedFrase = frasesLord[key]
        numAño = Number(año.value)
        ultNum = Number(key)
    }
    
    return selectedFrase
}
año.addEventListener('input', fraseSegunAno)


// Armado de personaje según fecha
let descMes;
let descDia;
let frase;
function armarPersonaje() {
    if(!reversarNombre() || !descMes || !descDia){
        console.log("falla funcion armar personaje")
        return false
    } else {
        frase = nombreReves + descMes + descDia;
        console.log("todo piola")
        return true
        
    }
    
}

let div;
let h3;
function mostrarPersonaje(){
    let div = document.getElementById('container')
    let h3 = document.createElement("h3")
    h3.appendChild(document.createTextNode(frase));
    div.appendChild(h3)

    
}

// ver como atajar erroes validando fecha, nombre, etc
// ver como ir borrando los resultados para que no sea acumulativo
