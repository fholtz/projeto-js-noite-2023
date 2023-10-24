const urlParams = new URLSearchParams(window.location.search);
const filme = urlParams.get("filme")


const showData = function (result) {
    console.log(result)

    document.querySelector('#titulo').innerHTML = result.Title;

    document.querySelector('#poster').innerHTML = `<img src="${result.Poster}"/>`

    document.querySelector('#nota').innerHTML = result.imdbRating;

    document.querySelector('#sinopse').innerHTML = result.Plot;

    document.querySelector('#genero').innerHTML = result.Genre;

    document.querySelector('#classificacao').innerHTML = result.Rated;
}

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?t=${filme}&apikey=249e3bec`, options)

    .then(function (response) {
        response.json()

            .then(function (filme) {
                // console.log(filme);
                showData(filme);
            })
    })


    
// const carregarLista = (json) => {
//     const lista = document.querySelector("div.lista");
//     lista.innerHTML = "";

//     json.Search.forEach(element => {
//         console.log(element);

//         let item = document.createElement("div");
//         item.classList.add("item");

//         item.innerHTML = `<a href="pagfilme.html?filme=${element.Title}"><img src="${element.Poster}"/><h2>${element.Title}</h2></a>`

//         lista.appendChild(item);

//     });
// }