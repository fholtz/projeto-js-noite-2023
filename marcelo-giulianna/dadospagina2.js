const urlParams = new URLSearchParams(window.location.search);

const nomefilme = urlParams.get("titulo")
const idfilme = urlParams.get("id")
console.log(nomefilme)
console.log(idfilme)

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?t=${nomefilme}&apikey=3096a4f4`, options)

    .then(function (response) {
        response.json()

            .then(function (data) {
                console.log(data)

            })

    })


    .catch(function (e) {
        console.log('Error: ' + e.message);
    })


    