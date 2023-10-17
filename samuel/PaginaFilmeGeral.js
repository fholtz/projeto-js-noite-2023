const urlParams = new URLSearchParams(window.location.search);
const nome_inicio = urlParams.get("nome") 
document.querySelector("#klk").innerHTML=nome_inicio

const pesquisa = document.querySelector('#Filnome');
const botao2 = document.querySelector('#buscafilm');

botao2.addEventListener('click', function (e) {
    e.preventDefault()
    // alert ("Seja bem vindo")

    let Encontrei = pesquisa.value;


    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://www.omdbapi.com/?s=${Encontrei}&apikey=30456d77`, options)

        .then(function (response) {
            response.json()

                .then(function (array) {
                    console.log(array)
                })
            })

        })