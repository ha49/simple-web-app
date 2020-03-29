function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('movies');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.movies);
        console.log("First Movie: " + data.movies[0].title);
        let movies = data.movies;
        return movies.map(function(movie) {
            let li = createNode('li');
            li.innerHTML = "Movie:"+movie.title + "----- Stars: " + movie.director;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
