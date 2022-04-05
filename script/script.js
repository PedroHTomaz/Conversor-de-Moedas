
function converter(){

    let vconvertidor = document.getElementById("valorAserConvertido").value
    let dolaratual = 4.65 //Cotação do dia 05.04.2022
    let res = vconvertidor / dolaratual
    let mostrar = document.getElementById("exit")

    mostrar.innerHTML = `$ ${res.toFixed(2)}`

}