var bottone = $(".header-right > a");
var menu = $(".hamburger-menu");
var chiudi = $(".close");

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

bottone.click (
    function() {
        menu.fadeIn();
    }
);

chiudi.click (
    function() {
        menu.fadeOut();
    }
);

