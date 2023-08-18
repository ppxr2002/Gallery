let img_slider = document.getElementsByClassName('img_slider');
let bulle = document.getElementsByClassName('bulle');
let infos = document.getElementsByClassName('infos');
let aff = document.getElementsByClassName('infos active');
let telecharger = document.getElementsByClassName('telecharger');
document.querySelectorByTagName



let etape = 0;

let nbr = img_slider.length;

let prev = document.querySelector('.prev');
let suiv = document.querySelector('.next');

let afficher = document.querySelector('.afficher');
let quitter = document.querySelector('.quit');



function activation(){
    for(let i = 0; i < nbr; i++){
        img_slider[i].classList.remove('active');
        bulle[i].classList.remove('active');
        infos[i].classList.remove('active');
        telecharger[i].classList.remove('active');
    }
}
suiv.addEventListener('click', function(){
    etape++;
    if(etape >= nbr){etape = 0;}
    activation();
    img_slider[etape].classList.add('active');
    bulle[etape].classList.add('active');
    infos[etape].classList.add('active');
    telecharger[etape].classList.add('active');
})
prev.addEventListener('click', function(){
    etape--;
    if(etape < 0){etape = nbr-1;}
    activation();
    img_slider[etape].classList.add('active');
    bulle[etape].classList.add('active');
    infos[etape].classList.add('active');
    telecharger[etape].classList.add('active');
})
setInterval(function(){
    etape++;
    if(etape >= nbr){etape = 0;}
    activation();
    img_slider[etape].classList.add('active');
    bulle[etape].classList.add('active');
    infos[etape].classList.add('active');
    telecharger[etape].classList.add('active');
}, 5000)

function tel (val) {
    document.getElementById("infos").style.opacity = val;
    return 0;
  }
  function bg (color) {
    document.getElementById("body").style.backgroundColor = color;
        return 0;
  }

    function calcul (point){
    document.getElementById("eto").innerHTML = "Note: "+point;
    return 0;
}