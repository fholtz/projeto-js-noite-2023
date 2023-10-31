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
                        <p>${filme.Title}</p>;
                        <button class="movieDetailButton" data-id="${filme.imdbID}">Detalhes</button>
                    `;
                    listaFilmes.appendChild(itemFilmes);
                });
                document.querySelectorAll('.movieDetailButton').forEach(button => {
                    button.addEventListener('click', function () {
                        const imdbID = this.getAttribute('data-id');

                        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=108644`)
                            .then(response => response.json())
                            .then(movie => {
                                const detalheFilmes = document.getElementById('detalheFilmes');
                                detalheFilmes.innerHTML = `
                                    <img src="${movie.Poster}" alt="${movie.Title}">
                                    <h2>${movie.Title}</h2>
                                    <p>Nota: ${movie.imdbRating}</p>
                                    <p>Sinopse: ${movie.Plot}</p>
                                    <p>Gênero: ${movie.Genre}</p>
                                    <p>Classificação: ${movie.Rated}`;
                            })
                    });
                });
            }
        });
});