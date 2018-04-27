//
// var sq1 = $("#0")
// var sq2 = $("#1")
// var sq3 = $("#2")
// var sq4 = $("#3")
// var sq5 = $("#4")
// var sq6 = $("#5")
// var sq7 = $("#6")
// var sq8 = $("#7")
// var sq9 = $("#8")
// var space = [ sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9];
// var winning = []
// var player = 0;
// var comp = 1;
// var turn = 1;
//
// var appear = $("[data-num]");
//
// $("#reset").click(function(){
//   $("[data-num]").removeClass("X").removeClass("O").html("");
// })
//
//
// // function game(){
// //   for (var i = 0; i < 9, i++) {
// //
// //   if (turn  === 0 ){
// //     $("td").click(function(event){
// //       $(this).addClass("X").html("X");
// //     })
// //     return turn = 1 ;
// //   } if (turn === 1 ){
// //     var spaces = space[(Math.floor(Math.random() * Math.floor(9)))];
// //     $(spaces).addClass("O").html("O");
// //     return turn = 0;
// //   }
// //   }
// // }
// //
// // game();
//



$(document).ready(function() {

var sq1 = $('data-num' | '0');
var sq2 = $('data-num' | '1');
var sq3 = $('data-num' | '2');
var sq4 = $('data-num' | '3');
var sq5 = $('data-num' | '4');
var sq6 = $('data-num' | '5');
var sq7 = $('data-num' | '6');
var sq8 = $('data-num' | '7');
var sq9 = $('data-num' | '8');



var checkPlay = false;




function validatePlay(squareplayed) {
	if ( $(squareplayed).hasClass('empty') ) {
		checkPlay = true;
    checkWin()
	} else {
		checkPlay = false;
    checkWin()
		return false;

	}
}

function clearBoard() {
	$('.square').removeClass('O');
	$('.square').removeClass('X');
	$('.square').html('');
	$('.square').addClass('empty');
}




var count = 0;

$('.square').on('click', function play() {
 count++;

	validatePlay(this);

	if (checkPlay && (count % 2)) {
		$(this).removeClass('empty');
		$(this).addClass('X');
		$(this).html("X");


	}
	else if (checkPlay && !(count % 2)){

		$(this).removeClass('empty');
		$(this).addClass('O');
		$(this).html("O");

		}

		else {
		alert("That square has already been played. Please choose another square");
	}

});

function checkWin(){
  if (sq1.hasClass("X") && sq2.hasClass("X") && sq3.hasClass("X") || sq1.hasClass("X") && sq4.hasClass("X") && sq7.hasClass("X") || sq1.hasClass("X") && sq5.hasClass("X") && sq9.hasClass("X")){
   alert("X has won");
 }else if (sq2.hasClass("X") && sq5.hasClass("X") && sq8.hasClass("X")){
   alert("X has won");
 }else if (sq3.hasClass("X") && sq6.hasClass("X") && sq9.hasClass("X") || sq3.hasClass("X") && sq5.hasClass("X") && sq7.hasClass("X")){
   alert("X has won");
 }else if (sq4.hasClass("X") && sq5.hasClass("X") && sq6.hasClass("X")){
   alert("X has won");
 }else if (sq7.hasClass("X") && sq8.hasClass("X") && sq9.hasClass("X")){
   alert("X has won");
 } else if (sq1.hasClass("O") && sq2.hasClass("O") && sq3.hasClass("O") || sq1.hasClass("O") && sq4.hasClass("O") && sq7.hasClass("O") || sq1.hasClass("O") && sq5.hasClass("O") && sq9.hasClass("O")){
  alert("O has won");
}else if (sq2.hasClass("O") && sq5.hasClass("O") && sq8.hasClass("O")){
  alert("O has won");
}else if (sq3.hasClass("O") && sq6.hasClass("O") && sq9.hasClass("O") || sq3.hasClass("O") && sq5.hasClass("O") && sq7.hasClass("O")){
  alert("O has won");
}else if (sq4.hasClass("O") && sq5.hasClass("O") && sq6.hasClass("O")){
  alert("O has won");
}else if (sq7.hasClass("O") && sq8.hasClass("O") && sq9.hasClass("O")){
  alert("O has won");
 }
}

$('#reset').on('click', function() {
	clearBoard();
})


});
