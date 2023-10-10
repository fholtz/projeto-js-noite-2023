const filme = document.querySelector('#filme');
const button = document.querySelector('#pesquisar');

button.addEventListener('click', function (e) { 

    const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
    }

    fetch('${search}', options)

})