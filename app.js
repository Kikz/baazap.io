//Interaccion home

//Buscador
//////////

//Una vez click en input[id="inputBuscador"] cambiar al estado
const unhideSearchbarMenu = new TimelineMax({paused:true});

unhideSearchbarMenu
  //Aplicar overlay azul oscuro
  .to(".buscadorOverlay", 0.4, { zIndex: "200", opacity: "0.95", ease:Sine.easeOut })
  //Animacion de buscador a parte superior
  .to(".searchbarContainer", 0.5, { top: "-37.931vh", ease:Sine.easeOut }).delay(-0.1)
  //Enseñar tags resultados
  .to(".tagsBuscadorContainer", 0.4, { display: "block",  ease:Sine.easeOut });

document.querySelector("#inputBuscador").addEventListener("click", function(){
  unhideSearchbarMenu.play();
});




//una vez introducido un caracter en el buscador cambiar search-icon.svg a cancel-icon.svg

//Linkear placeholders a base de datos



// Resultados cambiar estilo una vez clickado
function clickCategoria(){
  //Aplicar y quitar estilos en toggle
  //!!!NO FUNCIONA EL TOGGLE
  //Cambiar img:first-of-type de add-icon a check-icono
  this.querySelector(".tagIcon").src="imgs/check-icon.svg";
  //Añadir borde blanco
  this.style.border="2px solid #FFF";
  //Añadir boton de ver resultados
  document.querySelector(".resultadosButtonContainer").style.display="block";
}
document.querySelectorAll(".tagCategoria").forEach( function(elem){
  elem.addEventListener("click", clickCategoria);
});

//Resultados cambiar estilo una vez clickado
function clickProducto(){
  //Aplicar y quitar estilos en toggle
  //!!!NO FUNCIONA EL TOGGLE
  //Cambiar img:first-of-type de add-icon a check-icono
  this.querySelector(".tagIcon").src="imgs/check-icon.svg";
  //Añadir borde blanco
  this.style.border="2px solid #FFF";
  //Añadir boton de ver resultados
  document.querySelector(".resultadosButtonContainer").style.display="block";
}
document.querySelectorAll(".tagProducto").forEach( function(elem){
  elem.addEventListener("click", clickProducto);
});


//Boton Profile
////////////////

//Una vez apretado aparecera se desliza el menu oculto de la parte inferior de la pagina
const unhideProfileMenu = new TimelineMax({paused:true});

unhideProfileMenu.to("#containerProfile", 0.4, { bottom: "-1px", ease:Sine.easeOut }).reverse();

document.querySelector("#profileButton").addEventListener("click", function(){
  unhideProfileMenu.reversed(!unhideProfileMenu.reversed());
});
