const urlParams = new URLSearchParams(window.location.search);
const nome_filme = urlParams.get("nomefilme")

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?t=${nome_filme}&apikey=30456d77`, options)

    .then(function (response) {
        response.json()

            .then(function (data) {
                console.log(data);
                info_film(data);
            })
    })

    //se der errado faz outra coisa
    .catch(function (e) {
        console.log('Error:' + e.message);
    })

//console.log(search);

const showData = function (result) {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo]
            console.log(campo);
        }
    }
}




// function limpa_formulário_cep() {
//     //Limpa valores do formulário de cep.
//     document.getElementById('rua').value = ("");
//     document.getElementById('bairro').value = ("");
//     document.getElementById('cidade').value = ("");
//     document.getElementById('uf').value = ("");

// }

function info_film(conteudo) {
    if (!("Error" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('Posterfilm').innerHTML = `<img src=${conteudo.Poster}>`;
        document.getElementById('titulofilm').innerHTML = conteudo.Title
        document.getElementById('notafilm').innerHTML = conteudo.imdbRating
        document.getElementById('sinopsefilm').innerHTML = conteudo.Plot
        document.getElementById('generofilm').innerHTML = conteudo.Genre
       let result = "";

        switch (conteudo.Rated) {
            case "G":
                result = "Classificação livre"
                break;
            case "PG":
                result = "Orientação dos Responsáveis"
                break;
            case "PG-13":
                result = "Classificação 14 anos"
                break;
            case "R":
                result = "Classificação 16 ano"
                break;
            case "NC-17":
                result = "Classificação 18 anos"
                break;
            default:
                result = "Filme Desclassificado"
                break;
        }

        document.getElementById('classificacaofilm').innerHTML = result
    } //end if.
    else {
    console.log("Filme não encontrado");
        // limpa_formulário_cep();
        alert("Filme não encontrado .");
    }
}
