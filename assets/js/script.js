$(function(){

    $("a").click(function(event){   //Definimos selector "a" con evento click para realizar una función
      if (this.hash !== "") {
        event.preventDefault();     //evitamos el evento default de desplazar por la página  
  
        var gato = this.hash;       //Definimos nuestra variable con hash (#)
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top //Definimos realizar un scroll hacia la variable definida
        }, 800, function(){               // definimos la velocidad de desplazamiento y hacia donde
          window.location.hash = gato;
        });
      }
    });

    $('[data-toggle="popover"]').popover(); //definimos el evento el selector [data-toggle="popover"]
})