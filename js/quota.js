var request = require('request');

function getCitation(event) {
    request.get("https://api.quotable.io/random", function(err, res, body) {
        var citations = JSON.parse(body);

        var citation = citations.content;
        var author = citations.author

        console.log(citation);
        console.log(author);

        var citationElt = document.querySelector('.citation');
        var authorElt = document.querySelector('.author');

        citationElt.textContent = product.citation;
        authorElt.textContent = product.author;

    });
};

var buttonElt = document.querySelector('.button');
buttonElt.addEventListener('click', getCitation);