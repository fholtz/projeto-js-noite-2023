

const user_ = document.querySelector('#nomes');
const senhaL = document.querySelector('#senhas');
const botao = document.querySelector('#logar');



botao.addEventListener('click', function (e) {

    let Cinefolo = user_.value;
    let Secreto = senhaL.value;


    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`/ws/loginJson.json`, options)


        .then(function (response) {
            response.json()

                .then(function (array) {

                    let flagParada = false;

                    for (i=0; i< array.length; i++) {
                        if(array[i].login == Cinefolo && array[i].senha == Secreto) {
                            let NomeDoUser = array[i].nome;
                            console.log("Seja Bem Vindo"+ NomeDoUser);

                        }
                    }

       
                })
        })


        // se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })

    // console.log(search);
})























// user_.addEventListener('click', function (e) {

//     let search = user_.value;

//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
//     }

//     fetch(`http://www.omdbapi.com/?s=${search}&apikey=30456d77`, options)


//         .then(function (response) {
//             response.json()

//                 .then(function (dados) {
//                     consulta(dados);
//                     console.log(dados);

//                     document.querySelector("capa do filme").innerHTML = cidadenome.cidade;
//                     document.querySelector("nome do filme").innerHTML = cidadenome.result.data;
//                     document.querySelector("nota do filme").innerHTML = cidadenome.result.horario;
//                     document.querySelector("sinopse do filme").innerHTML = cidadenome.result.temperatura;
//                     document.querySelector("gênero do filme").innerHTML = cidadenome.result.tempo;
//                     document.querySelector("classificação do filme").innerHTML = cidadenome.result.amanhecer;
        
//                 })
//         })


//         // se der errado faz outra coisa
//         .catch(function (e) {
//             console.log('Error: ' + e.message);
//         })

//     // console.log(search);
// })


