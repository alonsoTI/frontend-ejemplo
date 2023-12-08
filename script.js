const url_api = "http://localhost:9000/api/ventas/"

function listar() {
    axios.get(url_api)
        .then(function (response) {

            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" +
                    "<td>" + response.data[index]._id + "</td>" +
                    "<td>" + response.data[index].item + "</td>" +
                    "<td>" + response.data[index].price + "</td>" +
                    "<td>" + response.data[index].quantity + "</td>" +
                    "<td>" + response.data[index].date + "</td>" +
                    "</tr>"
                document.getElementById("tabla").insertRow(-1).innerHTML = fila;
            }

        })
        .catch(function (error) {
            console.log(error)
        })
}

function guardar() {
    const datos = JSON.stringify(
        {
            item: item.value,
            price: price.value,
            quantity: quantity.value,
            date: date.value
        }
    );

    axios.post(url_api, datos, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            
        })
        .catch(function (error) {
            
        })

}

function buscar() {
    const id = id_buscar.value;
    const url_busqueda = url_api + id;

    axios.get(url_busqueda)
        .then(function (response) {

            var fila = "<tr>" +
                "<td>" + response.data._id + "</td>" +
                "<td>" + response.data.item + "</td>" +
                "<td>" + response.data.price + "</td>" +
                "<td>" + response.data.quantity + "</td>" +
                "<td>" + response.data.date + "</td>" +
                "</tr>"
            document.getElementById("tablaId").insertRow(-1).innerHTML = fila;

        })
        .catch(function (error) {
            console.log(error)
        })

}

function eliminar() {
    const id = elimina_id.value;
    const url_busqueda = url_api + id;

    axios.delete(url_busqueda)
        .then(function (response) {
            console.log("Se elimina venta")
        })
        .catch(function (error) {
            console.log(error)
        })
}

