

const user_ = document.querySelector('#nomes');
const senhaL = document.querySelector('#senhas');
const botao = document.querySelector('#logar');


botao.addEventListener('click', function (e) {
    e.preventDefault()
    // alert ("Seja bem vindo")
    let Cinefolo = user_.value;
    let Secreto = senhaL.value;


    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`ws/loginJson.json`, options)

        .then(function (response) {
            response.json()

                .then(function (array) {
                    console.log(array)
                    let NomeDoUser = "";
                    let flag = false;

                    for (let i=0; i< array.length; i++) {
                        if (array[i].login == Cinefolo && array[i].senha == Secreto) {
                            NomeDoUser = array[i].nome;
                            flag = true;
                            break;
                        }
                    }

                    if (flag) { 
                        console.log("Seja Bem Vindo "+ NomeDoUser);
                        window.open(`./PaginaDeBusca.html?nome=${NomeDoUser}`);
                    } else {
                        alert("Login ou senha incorretos");
                    }
       
                })
        })

        // se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })

    // console.log(search);
})


























