const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const button = document.querySelector('#pesquisar');

button.addEventListener('click', function (e) {
    let loginNome = login.value;
    let senhaOk = senha.value;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch('./ws/loginJson.json', options)
        .then(function (response) {
            response.json()
                .then(function (array) {
                    console.log(array);
                    for (let index = 0; index < array.length; index++) {
                        if (array[index].login == loginNome) {
                            if (array[index].senha == senhaOk) {
                                alert('seja bem vindo');
                            }
                        }
                        else { alert('login / senha incorretos'); }

                    }
                })
        })






})