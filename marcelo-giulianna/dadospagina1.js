const urlParams = new URLSearchParams(window.location.search);

const usuario = urlParams.get("login")
console.log(usuario)

document.querySelector("#retorno").innerHTML = 'Seja bem vindo ' + usuario

var filmes = document.querySelector('#filmes')

filmes.addEventListener('blur', function (e) {

    let buscageral = filmes.value

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://www.omdbapi.com/?s=${buscageral}&apikey=3096a4f4`, options)

        .then(function (response) {
            response.json()

                .then(function (data) {
                    // console.log(data)

                    for (let index = 0; index < data.Search.length; index++) {
                        console.log(data.Search)
                        document.querySelector('#listafilmes').innerHTML += `<a href='pagina2.html?titulo=${data.Search[index].Title}&id=${data.Search[index].imdbID}'><img src='${data.Search[index].Poster}'></img></a>`

                    }


                })

        })

        .catch(function (e) {
            console.log('Error: ' + e.message);
        })
})


