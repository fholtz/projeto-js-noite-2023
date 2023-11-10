const urlParams = new URLSearchParams(window.location.search);
const usuario = urlParams.get('nome')
document.getElementById('filme').innerText = `Seja bem-vindo, ${usuario}!!!`;

document.getElementById('botaoBuscar').addEventListener('click', function () {
    const search = document.getElementById('buscarFilmes').value;

    fetch(`http://www.omdbapi.com/?s=${search}&apikey=108644`)
        .then(response => response.json())
        .then(data => {
            const listaFilmes = document.getElementById('listaFilmes');
            listaFilmes.innerHTML = '';

            if (data.Search) {
                data.Search.forEach(filme => {
                    const itemFilmes = document.createElement('div');
                    itemFilmes.innerHTML = `
                        <img src="${filme.Poster}" alt="${filme.Title}">
                        <p>${filme.Title}</p>
                        <button class="botaoDetalhes" data-id="${filme.imdbID}">Mais detalhes</button>
                    `;
                    listaFilmes.appendChild(itemFilmes);
                });
                document.querySelectorAll('.botaoDetalhes').forEach(button => {
                    button.addEventListener('click', function () {
                        const imdbID = this.getAttribute('data-id');

                        document.querySelectorAll('.botaoDetalhes').forEach(button => {
                            button.addEventListener('click', function () {
                                const imdbID = this.getAttribute('data-id');
                                window.location.href = `detalhes.html?id=${imdbID}`;
                            });
                        });


                    });
                });

            } else {
                listaFilmes.innerHTML = 'Nenhum filme encontrado.';
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
});