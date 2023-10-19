const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#buscar');

botao.addEventListener('click', function (e) {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`./ws/loginJson.json`, options)
        .then(function (response) {
            response.json()
                .then(function (dados) {
                    console.log(dados);
                    var done = 0;
                    var loginX = login.value;
                    var senhaX = senha.value;
                    var nomeX = "";

                    for (let i = 0; i < dados.length; i++) {
                        if (loginX == dados[i].login && senhaX == dados[i].senha) {
                            nomeX = dados[i].nome;
                            done = 1;
                            break;
                        }
                    }

                    if (done == 1) {
                        alert("Bem-vindo " + nomeX + "!");
                        window.location = `paginicial.html?nome=${nomeX}`;

                    } else {
                        alert("Dados incorretos, tente novamente");
                    }
                })
        })
})