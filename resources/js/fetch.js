function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('Movies');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.movies);
        console.log("Visa första i json-objektet: " + data.movies[0].title);
        let movies = data.movies;
        return movies.map(function(movie) {
            let li = createNode('li');
            li.innerHTML = movie.title + " - " + movie.director;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
