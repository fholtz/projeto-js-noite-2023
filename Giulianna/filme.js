const urlParams = new URLSearchParams(window.location.search);
const titulo = urlParams.get("titulo");
var classificacaoFilme = "";


function classificacao(objeto) {
    switch (objeto.Rated) {
        case "G":
            result = "Classificação livre";
            break;
        case "PG":
            result = "Orientação dos Responsáveis"
            break;
        case "PG-13":
            result = "Classificação 14 anos"
            break;
        case "R":
            result = "Classificação 16 anos"
            break;
        case "NC-17":
            result = "Classificação 18 anos"
            break;
        default:
            result = "Filme Desclassificado"
            break;
    }

    return result;
}

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=aba81fb4`, options)
    .then(function (resultadoBase) {
        resultadoBase.json()
            .then(function (objeto) {

                classificacaoFilme = classificacao(objeto);
                document.querySelector('#Poster').innerHTML += `<img src="${objeto.Poster}">`;
                document.querySelector('#Title').innerHTML += objeto.Title;
                document.querySelector('#imdbRating').innerHTML += objeto.imdbRating;
                document.querySelector('#Plot').innerHTML += objeto.Plot;
                document.querySelector('#Genre').innerHTML += objeto.Genre;
                document.getElementById('Rated').innerHTML = classificacaoFilme;

            })



    })
