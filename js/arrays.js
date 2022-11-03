// console.log("Proves amb arrays")

function demoArrays() {

    // // Crear un array buid (llista)
    // var persones = []

    // // Afegir elements a un array
    // persones.push("Anna")
    // persones.push("Eva")

    // //Creem un array i l'iniciem
    // var alumnes = [
    //     "Pere",
    //     "Laura",
    //     "Dani",
    //     '<p style="color:blue">L\'altre</p>'
    // ]

    // alumnes.push("Arnau")
    // alumnes.pop()
    // alumnes.push("Robert")
    // console.log("L'element que s'ha eliminat és ", alumnes.shift())

    // console.log(persones, alumnes)

    // var numeros = [34, 12, 10, 2]
    // var total = 0
    // var mitjana = 0
    // console.log("Abans del sumatori")
    // numeros.forEach(sumatori)
    // console.log("Després del sumatori")
    // console.log(total)

    // function sumatori(valor, index, llista) {
    //     console.log("Dins del sumatori")
    //     console.log(valor, index, llista)
    //     total = total + valor
    // }

    // function calcularMitjana(valor) {
    //     mitjana = (mitjana + valor) / 2
    // }

    // numeros.forEach(calcularMitjana)
    // console.log(mitjana)


    var lletres = ["a", "b", "c", "d"]

    // for (var i = 0; i < lletres.length; i++){
    //     console.log(lletres[i])
    // }

    function ambElValor(valor) {
        console.log(valor)
    }

    lletres.forEach(ambElValor)

    var excel = [
        ["Nom", "Edat", "És soci", "Telèfon"]
        ["Jordi", 42, true, "59464157456"],
        ["Laura", 26, false, "54851294556"],
        ["Silemani", 21, true, "147218965234"]
        ["Sandra", 34, false, "585623688747"]
    ]

    function mostraInfoExcel(fila, pos) {

        if (pos == 0) {
            console.log("Estem a la posició 0")
        } else {
            console.log("No estem a la fila 0")
            console.log(fila, pos)
            console.log("Nom:", fila[0])
            console.log("Edat:", fila[1])
        }


        // console.log("És soci?:", fila[2])
        // console.log("Nom Telèfon:", fila[3])
    }

    excel.forEach(mostraInfoExcel)

    // console.log("En total hi han ", i, " lletres.")
}

