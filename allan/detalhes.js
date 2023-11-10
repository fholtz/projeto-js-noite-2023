document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const imdbID = params.get('id');

    if (imdbID) {
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=108644`)
            .then(response => response.json())
            .then(movie => {
                const detalhes = document.getElementById('detalheFilmes');
                const classificacao = getClassificacao(movie.Rated);
                const corClassificacao = getCorClassificacao(classificacao);

                detalhes.innerHTML = `
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h2>${movie.Title}</h2>
                    <p>Nota: ${movie.imdbRating}</p>
                    <p>Sinopse: ${movie.Plot}</p>
                    <p>Gênero: ${movie.Genre}</p>
                    <p style="color: ${corClassificacao};">Classificação: ${classificacao}</p>`;
            });
    }
});

function getClassificacao(rated) {
    switch (rated) {
        case 'G':
            return 'Livre';
        case 'PG':
            return 'Orientação dos Responsáveis';
        case 'PG-13':
            return '14 anos';
        case 'R':
            return '16 anos';
        case 'NC-17':
            return '18 anos';
        default:
            return rated;
    }
}

function getCorClassificacao(classificacao) {
    switch (classificacao) {
        case 'Livre':
            return 'green';
        case 'Orientação dos Responsáveis':
            return 'blue';
        case '14 anos':
            return 'orange';
        case '16 anos':
            return 'purple';
        case '18 anos':
            return 'orange';
        default:
            return 'white';
    }
}
