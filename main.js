

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

var bottone = $(".header-right > a, .close");
var menu = $(".hamburger-menu");
var verifica = true;

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

bottone.click (
    function(){
        menu.fadeToggle()
    }
);


