$(document).ready(function(){

  $('.next').click(nextImage);
  $('.prev').click(prevImage);


  function nextImage(){
   // creo una referenza che riporta all'immagine attiva

   var image_active = $('.images img.active');
   var circle_active = $('.nav-bar i.active');

   // rimuovo la classe active dall'elemento che ho selezionato
    image_active.removeClass('active');
    circle_active.removeClass('active');

    //aggiungo la classe active all'elemento successivo
    
    if(image_active.hasClass('last')){
      //aggiungo active a first
      $('.images img.first').addClass('active');
      $('.nav-bar i.first').addClass('active');
    }else{
      // se non è il mio ultimo elemento allora aggiungo active a quello successivo
      image_active.next('img').addClass('active');
      circle_active.next('i').addClass('active');
    }

  }





  function prevImage(){
       // creo una referenza che riporta all'immagine attiva

   var image_active = $('.images img.active');
   var circle_active = $('.nav-bar i.active');

   // rimuovo la classe active dall'elemento che ho selezionato
    image_active.removeClass('active');
    circle_active.removeClass('active');

    //aggiungo la classe active all'elemento precedente
    
    if(image_active.hasClass('first')){
      //aggiungo active a last
      $('.images img.last').addClass('active');
      $('.nav-bar i.last').addClass('active');
    }else{
      // se non è il mio ultimo elemento allora aggiungo active a quello precedente
      image_active.prev('img').addClass('active');
      circle_active.prev('i').addClass('active');
    }
  }
})