const botao = document.querySelector('#buscar');
let search = buscar
const showData = function (result) {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo]
            //console.log(campo)
        }
    }
}

botao.addEventListener('click', function (e) {

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
                    showData(dados);
                })
        })
})