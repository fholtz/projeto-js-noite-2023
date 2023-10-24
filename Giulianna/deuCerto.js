const urlParams = new URLSearchParams(window.location.search);
const nomeUsuario = urlParams.get("nome")
document.querySelector('#name').innerHTML = nomeUsuario;
const filme = document.querySelector('#filme')
const button = document.querySelector('#pesquisar');

button.addEventListener('click', function (e) { 
    const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'    
    }
    let nomedofilme = filme.value;

    fetch(`http://www.omdbapi.com/?s=${nomedofilme}&apikey=aba81fb4`, options)

    .then(function(response) {
        response.json()

            .then(function (objeto) {
                for(let i = 0; i < objeto.Search.length; i++) {
                    document.querySelector('#poster').innerHTML += `<a href="filme.html?titulo=${objeto.Search[i].Title}"><img src="${objeto.Search[i].Poster}"></a>`;
                }
            })
    })
})

