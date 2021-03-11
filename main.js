var bottone = $(".header-right > a, .close");  //unito (var bottone = $(".header-right > a"); con var chiudi = $(".close");
var menu = $(".hamburger-menu");
// var chiudi = $(".close");
var verifica = true;


// usate due varibili separate e .show/.hide

/*bottone.click (
    function() {
        menu.show();
    }
);

chiudi.click (
    function() {
        menu.hide();
    }
);*/


// usate due varibili separate e .fadeIn/.fadeOut

/*bottone.click (
    function() {
        menu.fadeIn();
    }
);

chiudi.click (
    function() {
        menu.fadeOut();
    }
);*/


// utilizzata unica variabile bottone con condizioni if else

/*bottone.click (
    function(){
        if (verifica == true){
            menu.fadeIn()
            verifica = false
        }
        else{
            menu.fadeOut()
            verifica = true
        }
    }
);*/


// utilizzata unica variabile bottone con fadeToggle

bottone.click (
    function(){
        menu.fadeToggle()
    }
);


