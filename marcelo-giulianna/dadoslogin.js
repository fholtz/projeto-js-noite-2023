<<<<<<< HEAD
const retorno = document.getElementById("retorno")

=======
>>>>>>> b15ec0e7fd1148ecb857ce884c8a0f06d906bcf0
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

                    for (let index = 0; index < data.length; index++) {
                        console.log(data[index].login)

                        if (nome == data[index].login && password == data[index].senha) {
                            console.log(data[index].nome)
                            window.open(`pagina1.html?login=${data[index].nome}`);
<<<<<<< HEAD
                            retorno.innerHTML 

=======
                            
>>>>>>> b15ec0e7fd1148ecb857ce884c8a0f06d906bcf0
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