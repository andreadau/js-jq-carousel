// Jquery dichiarato nell'head
$(function () {
// Dichiarazione variabili frecce
var frecciaIndietro = $(".fa-angle-left");
var frecciaAvanti = $(".fa-angle-right");
// Funzione al click freccia avanti
frecciaAvanti.click(function () {
    // Dichiarazione Varibili active first
    var imgActive = $("img.active");
    var imgFirst = $("img.first");
    var circleActive = $("i.fa-circle.active");
    var circleFirst = $('i.fa-circle.first');
    // Rimozione classe active
    imgActive.removeClass("active");
    circleActive.removeClass("active");
    // If per constatare la presenza di last, aggiungere active e passare alla prossima
    if (imgActive.hasClass("last")){
        imgFirst.addClass("active");
        circleFirst.addClass("active");
    } else {
        imgActive.next("img").addClass("active");
        circleActive.next("i").addClass("active");
    }
});
// Funzione al click freccia indietro
frecciaIndietro.click(function () {
    // Dichiarazione Varibili active last
    var imgActive = $("img.active");
    var imgLast = $("img.last");
    var circleActive = $("i.fa-circle.active");
    var circleLast = $('i.fa-circle.last');
    // Rimozione classe active
    imgActive.removeClass("active");
    circleActive.removeClass("active");
    // If per constatare la presenza di first, aggiungere active e passare alla precedente
    if (imgActive.hasClass("first")){
        imgLast.addClass("active");
        circleLast.addClass("active");
    } else {
        imgActive.prev("img").addClass("active");
        circleActive.prev("i").addClass("active");
    }
});

// BONUS keyboard functionality
$('html').keydown(function(e){
    if(e.keyCode == 37){
    // Dichiarazione Varibili active last
        var imgActive = $("img.active");
        var imgLast = $("img.last");
        var circleActive = $("i.fa-circle.active");
        var circleLast = $('i.fa-circle.last');
        // Rimozione classe active
        imgActive.removeClass("active");
        circleActive.removeClass("active");
        // If per constatare la presenza di first, aggiungere active e passare alla precedente
        if (imgActive.hasClass("first")){
            imgLast.addClass("active");
            circleLast.addClass("active");
        } else {
            imgActive.prev("img").addClass("active");
            circleActive.prev("i").addClass("active");
    }
    } else if(e.keyCode == 39){   
     // Dichiarazione Varibili active first
         var imgActive = $("img.active");
         var imgFirst = $("img.first");
         var circleActive = $("i.fa-circle.active");
         var circleFirst = $('i.fa-circle.first');
         // Rimozione classe active
         imgActive.removeClass("active");
         circleActive.removeClass("active");
         // If per constatare la presenza di last, aggiungere active e passare alla prossima
         if (imgActive.hasClass("last")){
             imgFirst.addClass("active");
             circleFirst.addClass("active");
         } else {
             imgActive.next("img").addClass("active");
             circleActive.next("i").addClass("active");
         }
    };
});
});