var item1 = document.querySelector('#skillsItem1');
var item2 = document.querySelector('#skillsItem2');
var item3 = document.querySelector('#skillsItem3');
var item4 = document.querySelector('#skillsItem4');

item1.innerHTML = "Intégration";
    item1.style.borderColor = "#CB0015";

item1.addEventListener("mouseleave", function( event ) {
    item1.innerHTML = "Intégration";
    item1.style.borderColor = "white";
});
item2.addEventListener("mouseleave", function( event ) {
    item2.innerHTML = "Interractive Design";
    item2.style.borderColor = "white";
});
item3.addEventListener("mouseleave", function( event ) {
    item3.innerHTML = "Logiciels";
    item3.style.borderColor = "white";
});
item4.addEventListener("mouseleave", function( event ) {
    item4.innerHTML = "Soft Skills";
    item4.style.borderColor = "white";
});

/*  Insère du texte au hover */
item1.addEventListener("mouseover", function( event ) {
    item1.innerHTML = "HTML<br/>CSS<br/>JavaScript";
    item1.style.borderColor = "#CB0015";
});
item2.addEventListener("mouseover", function( event ) {
    item2.innerHTML = "UI<br/>UX<br/>UserFlow<br/>Sketching";
    item2.style.borderColor = "#CB0015";
    item1.innerHTML = "Intégration";
    item1.style.borderColor = "white";
});
item3.addEventListener("mouseover", function( event ) {
    item3.innerHTML = "Suite Adobe<br/>Sketch<br/>Suite Office";
    item3.style.borderColor = "#CB0015";
    item1.innerHTML = "Intégration";
    item1.style.borderColor = "white";
});
item4.addEventListener("mouseover", function( event ) {
    item4.innerHTML = "Autonome<br/>Assidue</br>Sociable";
    item4.style.borderColor = "#CB0015";
    item1.innerHTML = "Intégration";
    item1.style.borderColor = "white";
});