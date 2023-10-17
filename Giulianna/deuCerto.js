const urlParams = new URLSearchParams(window.location.search);
const nomeUsuario = urlParams.get("nome")
document.querySelector('#name').innerHTML=nomeUsuario;
const filme = document.querySelector('#filme')
const button = document.querySelector('#pesquisar');


button.addEventListener('click', function (e) { 
    const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
    }
    fetch(`http://www.omdbapi.com/?s=${filme}&apikey=a86f111b`, options)

    .then(function (response) {
        response.json()

            .then(function (data) {
                console.log(data);
                showdata(data)
            })
    })
})

