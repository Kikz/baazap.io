
//Ocultar Recomendaciones
////////////////


const hideResultados = new TimelineMax({paused:true});

hideResultados
  .to(".sugerenciasContainer", 0.4, { bottom: "-148px", ease:Sine.easeOut })
  .to(".resultadosContainer", 0.4, { marginBottom: "80px", ease:Sine.easeOut })
  .to("#flechaSugerencia", 0.4, { transform: "scaleY(-1)", ease:Sine.easeOut}).reverse();


document.querySelector("#flechaSugerencia").addEventListener("click", function(){
  hideResultados.reversed(!hideResultados.reversed());
});
