function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
/*
function openMenuMobile(){
        document.querySelector('nav').style.display = 'block';
}
*/
function openMenuMobile(){
    document.querySelector(".menu-mobile").addEventListener("click", function(){
        if(document.querySelector("nav").style.display == 'block') {
            document.querySelector("nav").style.display = 'none'
        } else{
            document.querySelector("nav").style.display = 'block'
        } 
    });
};

openMenuMobile();