
function converter(){

    let vconvertidor = document.getElementById("valorAserConvertido").value,
            dolaratual = 4.62, 
                res = vconvertidor / dolaratual, 
                    mostrar = document.getElementById('convertido');

    mostrar.innerHTML = res.toFixed(2)

}
