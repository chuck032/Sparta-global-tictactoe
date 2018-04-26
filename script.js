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
	} else {
		checkPlay = false;
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
    checkWin()

	}
	else if (checkPlay && !(count % 2)){

		$(this).removeClass('empty');
		$(this).addClass('O');
		$(this).html("O");
    checkWin()
		}

		else {
		alert("That square has already been played. Please choose another square");
	}

});

function checkWin(){
  if ($(sq1).text()==$(sq2).text()==$(sq3).text() || $(sq1).text()==$(sq4).text()==$(sq7).text() || $(sq1).text()==$(sq5).text()==$(sq9).text()){
   alert($(sq1).text() + "has won")
  }if ($(sq2).text()==$(sq5).text()==$(sq8).text()){
   alert($(sq2).text() + "has won")
  }if ($(sq3).text()==$(sq6).text()==$(sq9).text() || $(sq3).text()==$(sq5).text()==$(sq7).text()){
   alert($(sq3).text() + "has won")
  }if ($(sq4).text()==$(sq5).text()==$(sq6).text()){
   alert($(sq4).text() + "has won")
  }if ($(sq7).text()==$(sq8).text()==$(sq9).text()){
   alert($(sq7).text() + "has won")
  }
}

$('#reset').on('click', function() {
	clearBoard();
})


});
