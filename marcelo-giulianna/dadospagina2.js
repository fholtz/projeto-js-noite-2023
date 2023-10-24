const urlParams = new URLSearchParams(window.location.search);


const nomefilme = urlParams.get("titulo")
const idfilme = urlParams.get("id")
console.log(nomefilme)
console.log(idfilme)

let classificacao = "";

const showData = function (result) {
    for (const info in result) {
        if (document.querySelector('#' + info)) {
            document.querySelector('#' + info).innerHTML += result[info]
            console.log(result);
        }

    }
}

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?t=${nomefilme}&apikey=3096a4f4`, options)

    .then(function (response) {
        response.json()

            .then(function (data) {
                showData(data)
                console.log(data)
                switch (data.Rated) {
                    case "G":
                        classificacao = "Classificação livre";
                        break;

                    case "PG":
                        classificacao = "Orientação dos Responsáveis";
                        break;

                    case "PG-13":
                        classificacao = "Classificação 14 anos";
                        break;

                    case "R":
                        classificacao = "Classificação 16 anos";
                        break;

                    case "NC – 17":
                        classificacao = "Classificação 18 anos";
                        break;
                    default:
                        classificacao = "";
                        break;
                }

                document.querySelector("#Rated").innerHTML = classificacao
                document.querySelector("#capa").innerHTML = `<img src='${data.Poster}'></img></a>`
            })

    })


    .catch(function (e) {
        console.log('Error: ' + e.message);
    })




