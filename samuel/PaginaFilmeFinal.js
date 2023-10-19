const urlParams = new URLSearchParams(window.location.search);
const nome_filme = urlParams.get("nomefilme") 

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?t=${nome_filme}&apikey=30456d77`, options)

.then(function (response) {
    response.json()

        .then(function (data) {
            //verShowdata


        })

})





