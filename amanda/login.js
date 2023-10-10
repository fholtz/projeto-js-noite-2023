const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#buscar');

<<<<<<< HEAD
botao.addEventListener('click', function (e) {
=======
// const showData = function (result) {
//     for (const campo in result) {
//         if (document.querySelector('#' + campo)) {
//             document.querySelector('#' + campo).value = result
//         }
//     }
// }

botao.addEventListener('click', function (e) {
    // let search = login.value.replace('');

>>>>>>> 0be8ea4ece1a75dc5205f96270edc9876772ca51
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

<<<<<<< HEAD
    fetch(`./ws/loginJson.json`, options)
        .then(function(response) {
            response.json()
                .then(function(dados) {
                    console.log(dados);
                    var done = 0;
                    var loginX = login.value;
                    var senhaX = senha.value;
            
                    for (let i = 0; i < dados.length; i++) {
                        if (loginX == dados[i].login && senhaX == dados[i].senha) {

                            done = 1;
                            break;
                        }
                    }
                    
                    if (done == 1) {
                        alert("Bem-vindo!");
                        window.location = `paginicial.html?${variavel}`;
                        
                    } else {
                        alert("Dados incorretos, tente novamente");
                    }
                })
        })
})

=======
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
>>>>>>> 0be8ea4ece1a75dc5205f96270edc9876772ca51
