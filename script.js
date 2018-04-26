var appear = $("[data-num]");

// .click(function(){
//
// });


function crosses(){
var cross = $(appear).addClass("X").html("X");
return cross;
}

function noughts() {
var nought = $(appear).addClass("O").html("O");
return nought;
}
