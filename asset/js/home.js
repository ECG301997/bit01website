document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -50,
        shift: 5,
        padding: 5,
        numVisible: 6,
        indicators: true,
        noWrap: false
    });
});


function rec_1(){
    document.addEventListener.onclick(window.open('./asset/pages/recetas.html?receta=receta_1'));
}
function rec_2(){
    document.addEventListener.onclick(window.open('./asset/pages/recetas.html?receta=receta_2'));
}
function rec_3(){
    document.addEventListener.onclick(window.open('./asset/pages/recetas.html?receta=receta_3'));
}
function rec_4(){
    document.addEventListener.onclick(window.open('./asset/pages/recetas.html?receta=receta_4'));
}
