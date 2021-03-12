// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(function() {

  // Al click sulla freccia dx tolgo classe active all'immagine visible e lo do a quella successiva
  $(".next").click(
    function() {
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
  );

  // Al click sulla freccia sx tolgo classe active all'immagine visible e lo do a quella precedente
  $(".prev").click(
    function() {
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
  );

});
