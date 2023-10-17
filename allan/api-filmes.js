const urlParams = new URLSearchParams(window.location.search);
const usuario = urlParams.get('nome')
document.getElementById('filmes').innerText = `Seja bem-vindo, ${usuario}!!!`;

