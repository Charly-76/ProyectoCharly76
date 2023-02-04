let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }

}


function seleccionar (){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
function efectoHabilidades(){
        var habilidades = document.getElementById("habilidades")
        var distancia_habilidades =window.innerHeight - habilidades.getBonnuClienRect ().top;
        if( distancia_habilidades>=300){
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("photoshop");
            habilidades[3].classList.add("microsoftoffice");
            habilidades[4].classList.add("soundforgepro");
            habilidades[5].classList.add("ingles");
            habilidades[6].classList.add("italiano");
            habilidades[7].classList.add("portués");
            habilidades[8].classList.add("noruego");
            habilidades[9].classList.add("frances");
        ]
            )
}
windows.oncroll =function(){
    efectoHabilidades();
}