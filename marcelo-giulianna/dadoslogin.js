
const login = document.querySelector('#login')

const senha = document.querySelector('#senha')

const botao = document.querySelector('#entrar')

botao.addEventListener('click', function (e) {

    let nome = login.value

    let password = senha.value

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`ws/loginJson.json`, options)

        .then(function (response) {
            response.json()

                .then(function (data) {
                    // console.log(data)

                    for (let index = 0; index < data.length; index++) {

                        if (nome == data[index].login && password == data[index].senha) {
                            console.log(data[index].nome)
                            window.open(`pagina1.html?login=${data[index].nome}`);

                            break
                        }

                        else {
                            console.log("erro")
                        }

                    }
                })
        })

        .catch(function (e) {
            console.log('Error: ' + e.message);
        })


})