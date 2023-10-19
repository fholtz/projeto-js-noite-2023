const botao = document.querySelector('#buscar');
const buscar = document.querySelector('#buscarNome');

const showData = function (result) {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo]
            //console.log(campo)
        }
    }
}

botao.addEventListener('click', function (e) {

    let search = buscar.value;

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://www.omdbapi.com/?s=${search}&apikey=249e3bec`, options)

        .then(function (response) {
            response.json()

                .then(function (dados) {
                    console.log(dados);
                    carregarLista(dados);
                })
        })
})


const carregarLista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

    json.Search.forEach(element => {
        console.log(element);

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<a href="pagfilme.html?filme=${element.Title}"><img src="${element.Poster}"/><h2>${element.Title}</h2></a>`

        lista.appendChild(item);

    });
}

const urlParams = new URLSearchParams(window.location.search);

const usuario = urlParams.get("nomeUsuario")
