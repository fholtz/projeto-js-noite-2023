const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const button = document.querySelector('#pesquisar');


button.addEventListener('click', function (e) {
    let loginNome = login.value;
    let senhaOk = senha.value;
    // let SejaBemVindo =  
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch('./ws/loginJson.json', options)
        .then(function (response) {
            response.json()
                .then(function (array) {
                    let flagParada = false
                    for (let index = 0; index < array.length; index++) {
                          if (array[index].login == loginNome && array[index].senha == senhaOk) {
                            SejaBemVindo =
                                flagParada = true;
                            if (flagParada == true) {
                                alert("Seja bem vindo");
                            }
                            break;
                        } else {
                            flagParada = false;
                        }

                    }
                })
        })






})