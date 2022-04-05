function converter () {
    var vconvertidor = document.getElementById("valorAserConvertido").value
    var dolaratual = 4.66
    var res = vconvertidor / dolaratual
    var mostrar = document.getElementById("exit")

    mostrar.innerHTML = res
}
