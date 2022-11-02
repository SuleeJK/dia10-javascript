// console.log("Proves amb arrays")

// function demoArrays() {

//     // Crear un array buid (llista)
//     var persones = []

//     // Afegir elements a un array
//     persones.push("Anna")
//     persones.push("Eva")

//     //Creem un array i l'iniciem
//     var alumnes = [
//         "Pere",
//         "Laura",
//         "Dani",
//         '<p style="color:blue">L\'altre</p>'
//     ]

//     alumnes.push("Arnau")
//     alumnes.pop()
//     alumnes.push("Robert")
//     console.log("L'element que s'ha eliminat és ", alumnes.shift())

// console.log(persones,alumnes)

var numeros = [34, 12, 10, 2]
var total = 0

numeros.forEach(sumatori)

function sumatori(valor, index, array) {
    console.log(valor, index, array)
}

