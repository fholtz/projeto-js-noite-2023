const login = document.querySelector('#login');

const botao = document.querySelector('#buscar');

const showData = function (result) {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

botao.addEventListener('click', function (e) {
    let search = cep.value.replace('-', '');
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=249e3bec', options)