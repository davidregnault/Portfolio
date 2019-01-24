
/* SCRIPT IMG SECTION SKILLS */

var items = document.querySelectorAll('.skills__items');
var item1 = document.querySelector('#skillsItem1');
var item2 = document.querySelector('#skillsItem2');
var item3 = document.querySelector('#skillsItem3');
var item4 = document.querySelector('#skillsItem4');

var imgInitial = document.querySelector('.skills__img--isInitial');
var img1 = document.querySelector('.skills__img--isOne');
var img2 = document.querySelector('.skills__img--isTwo');
var img3 = document.querySelector('.skills__img--isThree');
var img4 = document.querySelector('.skills__img--isFour');

/*  Remettre l'image par default */
item1.addEventListener("mouseleave", function( event ) {
    img1.style.display = "initial";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
});
item2.addEventListener("mouseleave", function( event ) {
    img1.style.display = "initial";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
});
item3.addEventListener("mouseleave", function( event ) {
    img1.style.display = "initial";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
});
item4.addEventListener("mouseleave", function( event ) {
    img1.style.display = "initial";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
});
/*  Affiche une image au hover */
item1.addEventListener("mouseover", function( event ) {
    img1.style.display = "initial";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
});
item2.addEventListener("mouseover", function( event ) {
    img1.style.display = "none";
    img2.style.display = "initial";
    img3.style.display = "none";
    img4.style.display = "none";
});
item3.addEventListener("mouseover", function( event ) {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "initial";
    img4.style.display = "none";
});
item4.addEventListener("mouseover", function( event ) {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "initial";
});