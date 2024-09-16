
function Carro(){
    let marca = document.getElementById("Marca").value
    let modelo = document.getElementById("Modelo").value
    

    let carro = {
        Marca: marca,
        Modelo: modelo
    }

    localStorage.setItem("carro", JSON.stringify(carro));

    console.log(carro)
}
