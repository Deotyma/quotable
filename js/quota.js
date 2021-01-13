$(document).ready(function() {


    $(".button").click(function() {
        $.ajax({
            url: 'https://api.quotable.io/random',
            success: function(data, statuts, response) {
                $("#citation").text(data.content);
                $("#author").text(data.author);
            }
        });
    });
});

/* const fetch = require('node-fetch');

var quotaElt = document.querySelector('div.quota');

function getCitation(event) {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => quotaElt.innerHTML = ` <p class="citation">${data.citation}</p>
        <p class="author">${data.author}</p>
        <div class="button">New quota</div>`)
        .catch(error => console.log("error"))
}

var buttonElt = document.querySelector('.button');
buttonElt.addEventListener('click', getCitation); */



/* const request = require("request");

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

*/