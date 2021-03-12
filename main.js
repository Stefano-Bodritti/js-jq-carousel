// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

// FUNZIONI
// funzione che fa slide verso dx
// Al click sulla freccia dx tolgo classe active all'immagine visible e lo do a quella successiva
function slideRight() {
  var imgVisible = $("img.active");
  var bulletBlue = $(".fa-circle.active");

  imgVisible.removeClass("active");
  bulletBlue.removeClass("active");

  if ( imgVisible.hasClass("last") ) {
    $("img.first").addClass("active");
    $(".fa-circle.first").addClass("active");
  } else {
    imgVisible.next().addClass("active");
    bulletBlue.next().addClass("active");
  }
}

//funzione che va slide verso sx
// Al click sulla freccia sx tolgo classe active all'immagine visible e lo do a quella precedente
function slideLeft() {
  var imgVisible = $("img.active");
  var bulletBlue = $(".fa-circle.active");

  imgVisible.removeClass("active");
  bulletBlue.removeClass("active");

  if ( imgVisible.hasClass("first") ) {
    $("img.last").addClass("active");
    $(".fa-circle.last").addClass("active");
  } else {
    imgVisible.prev().addClass("active");
    bulletBlue.prev().addClass("active");
  }
}

$(function() {

  $(".next").click(
    function() {
      slideRight()
    }
  );


  $(".prev").click(
    function() {
      slideLeft()
    }
  );

  //se premo i tasti freccia-sx o freccia-dx, invoco le funzioni
  $(document).keydown(
    function() {
      var pressed = event.which;
      if ( pressed == 37 ) {
        slideLeft();
      } else if ( pressed == 39 ) {
        slideRight();
      }
    }
  );

});
