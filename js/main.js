//mouvment
const container = document.querySelector('.container');
const card = document.querySelector('.card');

//items

const flower = document.querySelector('.top img');
const citation = document.querySelector('.citation');
const author = document.querySelector('.author');
const button = document.querySelector('.button');

//moving event
container.addEventListener("mousemove", (e) => {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
    flower.style.transform = "translateZ(100px) rotateZ(-45deg)";
    citation.style.transform = "translateZ(50px)";
    author.style.transform = "translateZ(50px)";
    button.style.transform = "translateZ(100px)";
});

//Animation out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin
    flower.style.transform = "translateZ(0px) rotateZ(0deg)";
    citation.style.transform = "translateZ(0px)";
    author.style.transform = "translateZ(0px)";
    button.style.transform = "translateZ(0px)";
});