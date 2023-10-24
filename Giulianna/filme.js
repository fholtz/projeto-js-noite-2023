const urlParams = new URLSearchParams(window.location.search);
const titulo = urlParams.get("titulo");

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=aba81fb4`, options)
    .then(function (resultadoBase) {
        resultadoBase.json()
        .then(function (objeto){
            console.log(objeto)
            document.querySelector('#Poster').innerHTML += `<img src="${objeto.Poster}">`;
            document.querySelector('#Title').innerHTML += objeto.Title;
            document.querySelector('#imdbRating').innerHTML += objeto.imdbRating;
            document.querySelector('#Plot').innerHTML += objeto.Plot;
            document.querySelector('#Genre').innerHTML += objeto.Genre;
            document.querySelector('#Rated').innerHTML += objeto.Rated;
        })

        
    })
