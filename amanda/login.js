const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#buscar');

// const showData = function (result) {
//     for (const campo in result) {
//         if (document.querySelector('#' + campo)) {
//             document.querySelector('#' + campo).value = result
//         }
//     }
// }

botao.addEventListener('click', function (e) {
    // let search = login.value.replace('');

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    // fetch(`http://www.omdbapi.com/?s=${search}&apikey=249e3bec`, options)

    fetch(`./ws/loginJson.json`, options)

        .then(function (response) {
            response.json()
                .then(function (dados) {



                    console.log(dados);

                    for (let index = 0; index < dados.length; index++) {
                        if (login[index] == login) {



                            if (pastasUnidades[index] < 20) {
                            }
                        }
                        // showData(dados);
                    })
        })

})
