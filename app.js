

// Toma el nombre ingresado del input y lo reversa -- Reverse the name from input name plus error handling
let submit = document.querySelector("#submit")
let nombre = document.querySelector("#nombre")
let nombreReves;
function reversarNombre() {
    nombreR = nombre.value.split("").reverse().join("") //Reversa el valor ingresado en campo nombre
    if (nombreR.charAt(0).toLowerCase) {
        nombreReves = nombreR.charAt(0).toUpperCase() + nombreR.substring(1).toLowerCase() // Convierte todas las letras a minúscula excepto la primera en mayúscula.
    }
    if (validarFecha() && fraseSegunAno() && nombreReves) {
        return true
    } else if (!validarFecha() || !fraseSegunAno() || !nombreReves) {
        alert("Los datos ingresados son incorrectos o posee campos incompletos")
        return false
    }
}



submit.addEventListener('click', function () {
    reversarNombre();
    armarPersonaje();
    if (frase !== 'undefined' || frase.length) {
        mostrarPersonaje()
    } else if (frase === 'undefined' || !frase.length || !mostrarPersonaje()) {
        return false
    }
})



//Evalúa si es año bisiesto - Evaluates if it's a leap year
function esBisiesto() {
    if ((0 === numAño % 4) && (0 !== numAño % 100) || (0 === numAño % 400)) {
        return true
    } else {
        return false
    }
}

//Función que valida Fecha de acuardo a la cantidad de días de cada mes -- Function that validates date according to qty of days in a month
let meses31 = [1, 3, 5, 7, 8, 10, 12]; // meses con 31 días
let meses30 = [4, 6, 9, 11]; // meses con 30 días
let meses28 = [2]; // único mes con 28 días, a no ser que sea bisiesto (29)
let diasEnMeses;
function validarFecha() {
    let diasEnMeses =
        (meses31.indexOf(numMes) !== -1 && numDia <= 31) ||
        (meses30.indexOf(numMes) !== -1 && numDia <= 30) ||
        (meses28.indexOf(numMes) !== -1 && numDia <= 28) ||
        (meses28.indexOf(numMes) !== -1 && numDia <= 29 && esBisiesto());
    if (diasEnMeses && valorMes() && valorDia()) {
        return true
    } else if (!diasEnMeses || !valorMes() || !valorDia()) {
        return false
    }
    return true
}

// Detecta día y retorna dos atributos: origen del personaje y el número del día -- From Day (Dia) selection brings two attributes: Character's description and number value of month
let ingresoDia = document.querySelector('#dia')
let numDia;
function valorDia() {
    selectedDia = ingresoDia.options[ingresoDia.selectedIndex];
    attrValDia = selectedDia.value
    attrValNum = selectedDia.dataset.attrVal
    numDia = Number(attrValNum);
    descDia = attrValDia;
    if (numDia && descDia) {
        return true
    } else if (!numDia || !descDia) {
        return false
    }
}
ingresoDia.addEventListener('input', valorDia);

// Detecta mes y retorna dos atributos: característica del personaje y el número del mes -- From Month selection brings two attributes: Character's description and number value of month
let mes = document.querySelector("#mes")
let numMes;
function valorMes() {
    selectedMes = mes.options[mes.selectedIndex];
    attrValMes = selectedMes.value
    attrValNum = selectedMes.dataset.attrVal
    numMes = Number(attrValNum)
    descMes = attrValMes
    if (numMes && descMes) {
        return true
    } else if (!numMes || !descMes)
        return false
}
mes.addEventListener('input', valorMes);



// Asignación de números a Citas del Tolkien -- Number assignments to Tolkien Quotes
let frasesLord = {
    0: "'Si con mi vida, o con mi muerte puedo protegerte, lo haré… cuenta con mi espada, y con mi arco y con mi hacha' – Aragorn, Legolas y Gimli",
    1: "'Un mago nunca llega tarde, ni pronto, llega exactamente cuando se lo propone” – Gandalf el Gris.'",
    2: "'Hasta la persona mas pequeña puede cambiar el curso del futuro – Dama Galadriel'",
    3: '"No conozco a la mitad de vosotros ni la mitad de lo que desearía, y lo que deseo es menos de la mitad de lo que la mitad merecéis.”. – Bilbo Bolsón',
    4: '"Los Hobbits son criaturas sorprendentes, puedes aprender todas sus costumbres en un mes, y después de cien años, aún te sorprenden.” – Gandalf el Gris',
    5: '"¡Llegada es la hora! ¡Jinetes de Rohan, os ata un juramento! ¡Dadle ahora cumplimiento! ¡Por el Rey, y la tierra!” – Éomer, capitán de Rohan.',
    6: '"Es peligroso, Frodo, cruzar tu puerta. Pones un pie en el camino, y si no cuidas tus pasos, nunca sabes a dónde te puede llevar.” – Gandalf el Gris.',
    7: '"No es más que la sombra de una ilusión lo que amas. No puedo darte lo que anhelas” – Aragorn',
    8: '"Coraje despierta ahora por ira holocausto y rojo amanecer” – Theoden, Rey de Rohan.',
    9: '¡Legolas! ¡¿Qué ven tus ojos de elfo? – Aragorn'
}

// Detects year input and assigns a Quote according to last number of year -- Detecta número del año para asignar una cita de Tolkien de acuerdo al último número del año.
let año = document.getElementById('año')
let test;
function fraseSegunAno() {

    for (let test in frasesLord) {
        test = año.value[3]
        selectedFrase = frasesLord[test]
        numAño = Number(año.value)
        ultNum = Number(test)
    }
    return selectedFrase
}
año.addEventListener('input', fraseSegunAno)


// Join values that results in name of character plus description -- Une valores para el nombre del personaje y su descripción según valores de fecha
let descMes;
let descDia;
let frase;
function armarPersonaje() {
    if (!nombreReves || !descMes || !descDia || !numAño) {
        return false
    } else if (nombreReves && descMes && descDia && año) {
        frase = nombreReves + descMes + descDia;
        return true
    }
}



//Muestra el personaje resultado del nombre al revés más su descripción y origen y una cita aleatoria de Tolkien -- Shows the character resulting from reversed name + description and origin and a random quote from Tolkien's Lord of the Rings
let div;
let h3Element;
let quoteElement;
let oldH3Element;
let oldQuote;
function mostrarPersonaje() {
    let oldH3Element = document.querySelector('h3.addedH3')
    let oldQuote = document.querySelector("h2.addedH2")

    if (oldH3Element)
        oldH3Element.parentNode.removeChild(oldH3Element) // Realiza un clear de existir un appended text previo -- Clears previous appended text
    if (oldQuote)
        oldQuote.parentNode.removeChild(oldQuote) // Remueve cita previa -- Removes previous quote.

    if (frase && validarFecha() && fraseSegunAno() && nombreReves) { // Si no hay errores previos muestra el personaje creado y la cita de Tolkien -- If there are no error, show character and quote
        div = document.getElementById('container')
        quote = document.querySelector("#quote")
        quoteElement = document.createElement("h2")
        h3Element = document.createElement("h3")
        h3Element.className = "addedH3"
        quoteElement.className = "addedH2"
        h3Element.appendChild(document.createTextNode(frase));
        quoteElement.appendChild(document.createTextNode(selectedFrase))
        div.appendChild(h3Element)
        quote.appendChild(quoteElement)
    } else if (!frase || !fraseSegunAno() || !validarFecha()) {
        return false
    }
}





