// console.log("Proves amb arrays")

function demoArrays() {

    // Crear un array buid (llista)
    var persones = []

    // Afegir elements a un array
    persones.push("Anna")
    persones.push("Eva")

    //Creem un array i l'iniciem
    var alumnes = [
        "Pere",
        "Laura",
        "Dani",
        '<p style="color:blue">L\'altre</p>'
    ]

    alumnes.push("Arnau")
    alumnes.pop()
    alumnes.push("Robert")
    console.log("L'element que s'ha eliminat és ", alumnes.shift())

    console.log(persones, alumnes)

    var numeros = [34, 12, 10, 2]
    var total = 0
    var mitjana = 0
    console.log("Abans del sumatori")
    numeros.forEach(sumatori)
    console.log("Després del sumatori")
    console.log(total)

    function sumatori(valor, index, llista) {
        console.log("Dins del sumatori")
        console.log(valor, index, llista)
        total = total + valor
    }

    function calcularMitjana(valor) {
        mitjana = (mitjana + valor) / 2
    }

    numeros.forEach(calcularMitjana)
    console.log(mitjana)
}
