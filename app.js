//Interaccion home

//Buscador
//////////

//Una vez click en input[id="inputBuscador"] cambiar al estado
const unhideSearchbarMenu = new TimelineMax({paused:true});

unhideSearchbarMenu
  //Aplicar overlay azul oscuro
  .to(".buscadorOverlay", 0.4, { zIndex: "200", opacity: "0.95", ease:Sine.easeOut })
  .to(".resultadosButtonContainerBackground", 0.4, { zIndex: "250", opacity: "0.95", ease:Sine.easeOut })
  //Animacion de buscador a parte superior
  .to(".searchbarContainer", 0.5, { top: "-37.931vh", ease:Sine.easeOut }).delay(-0.1)
  //Enseñar tags resultados
  .to(".tagsBuscadorContainer", 0.4, { display: "block",  ease:Sine.easeOut });

function unhideSearchBarFunction (){
  this.removeEventListener("click",unhideSearchBarFunction );
  //this.addEventListener("click",function (){this.focus();});
  unhideSearchbarMenu.play();
  this.addEventListener("oninput",mySearch(this.value) );
}

document.querySelector("#inputBuscador").addEventListener("click", unhideSearchBarFunction);

function mySearch(value){
	if (value.length>2){
    fillCountries(value);
  }
}




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

function clickToogle(){
  //Aplicar y quitar estilos en toggle
  //Cambiar img:first-of-type de add-icon a check-icono
  //var values=["","","",""];
  //data_toogle is a personal atribute only works on html5 browsers
  //if(!this.hasAttribute("data_toogle")) this.setAttribute("data_toogle","off");
  if (!(this.data_toogle=="on")){
    values=["on","imgs/check-icon.svg","2px solid #FFF","block"];
  } else {
    values=["off","imgs/add-icon.svg","",""];
  }
  this.data_toogle=values[0];
  this.querySelector(".tagIcon").src=values[1];
  //Añadir borde blanco
  this.style.border=values[2];
  //Añadir boton de ver resultados
  document.querySelector(".resultadosButtonContainer").style.display=values[3];
}

[".tagCategoria",".tagProducto"].forEach( function(item){
  document.querySelectorAll(item).forEach(function(elem) {
    elem.addEventListener("click",clickToogle);
  });
});


//Boton Profile
////////////////

//Una vez apretado aparecera se desliza el menu oculto de la parte inferior de la pagina
const unhideProfileMenu = new TimelineMax({paused:true});

unhideProfileMenu.to("#containerProfile", 0.4, { bottom: "-1px", ease:Sine.easeOut }).reverse();

document.querySelector("#profileButton").addEventListener("click", function(){
  unhideProfileMenu.reversed(!unhideProfileMenu.reversed());
});



// Search routines
//////////////////

function fillCountries(value){
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var lines=this.responseText.split(",");
    	var dest=document.getElementById(".tagsBuscadorContainer");
    	// delete other countries
    	//dest.innerHTML ="";
    lines.forEach(
     function(item){
      var node = document.createElement("DIV");
      node.class="tagPais";
      var child=document.createElement("IMG");
      child.class="tagIcon";
      child.src="imgs/add-icon.svg";
      node.appendChild(child);
      child=document.createElement("SPAN");
      child.innerHTML=item;
      node.appendChild(child);
      var textnode = document.createTextNode(item);
      node.appendChild(textnode);
      child=document.createElement("IMG");
      child.class="banderaTag";
      child.src="imgs/peru-flag.svg";
      node.appendChild(textnode);
      dest.appendChild(node);
     }
    )
    //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "services/db_countries.php?country="+value, true);
  xhttp.send();
}
