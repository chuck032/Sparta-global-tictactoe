$(document).ready(function() {

  var sq1 = $("#0");
  var sq2 = $("#1");
  var sq3 = $("#2");
  var sq4 = $("#3");
  var sq5 = $("#4");
  var sq6 = $("#5");
  var sq7 = $("#6");
  var sq8 = $("#7");
  var sq9 = $("#8");
  var checkPlay = false;
  var gameEnd = false;
  var xWin = false;
  var oWin = false;


// Function to check if square is empty
  function validatePlay(squareplayed) {
    checkWinX();
    checkWinO();
  	if ( $(squareplayed).hasClass('empty') ) {
  		checkPlay = true;
  	} else {
  		checkPlay = false;
  		return false;
  	}
  }

//Function to clear board
  function clearBoard() {
  	$('.square').removeClass('O');
  	$('.square').removeClass('X');
  	$('.square').html('');
  	$('.square').addClass('empty');
    gameEnd = false;
    xWin = false;
    oWin = false;
  }

// clicking a square function
  var count = 0;
  $('.square').on('click', function play() {
    winnerCheck();
    if (gameEnd === true) {
      $("#playerTurn").append("</br> Game over!")
    } else {
      validatePlay(this);
      if (checkPlay && (count % 2)) {
        count++;
        $("#playerTurn").html("It is O's turn");
        $(this).removeClass('empty');
        $(this).addClass('X');
        $(this).html("X");
      }
      else if (checkPlay && !(count % 2)){
        count++;
        $("#playerTurn").html("It is X's turn");
        $(this).removeClass('empty');
        $(this).addClass('O');
        $(this).html("O");
        }
        else {
        alert("That square has already been taken.");
      }
    }
  });

// function to check X win
  function checkWinX(){
    if (sq1.hasClass("X") && sq2.hasClass("X") && sq3.hasClass("X") || sq1.hasClass("X") && sq4.hasClass("X") && sq7.hasClass("X") || sq1.hasClass("X") && sq5.hasClass("X") && sq9.hasClass("X")){
     return xWin = true;
   }if (sq2.hasClass("X") && sq5.hasClass("X") && sq8.hasClass("X")){
     return xWin = true;
   }if (sq3.hasClass("X") && sq6.hasClass("X") && sq9.hasClass("X") || sq3.hasClass("X") && sq5.hasClass("X") && sq7.hasClass("X")){
     return xWin = true;
   }if (sq4.hasClass("X") && sq5.hasClass("X") && sq6.hasClass("X")){
     return xWin = true;
   }if (sq7.hasClass("X") && sq8.hasClass("X") && sq9.hasClass("X")){
     return xWin = true;
   }
 }

// function to check O win
  function checkWinO(){
   if (sq1.hasClass("O") && sq2.hasClass("O") && sq3.hasClass("O") || sq1.hasClass("O") && sq4.hasClass("O") && sq7.hasClass("O") || sq1.hasClass("O") && sq5.hasClass("O") && sq9.hasClass("O")){
    return oWin = true;
  } if (sq2.hasClass("O") && sq5.hasClass("O") && sq8.hasClass("O")){
    return oWin = true;
  } if (sq3.hasClass("O") && sq6.hasClass("O") && sq9.hasClass("O") || sq3.hasClass("O") && sq5.hasClass("O") && sq7.hasClass("O")){
    return oWin = true;
  } if (sq4.hasClass("O") && sq5.hasClass("O") && sq6.hasClass("O")){
    return oWin = true;
  } if (sq7.hasClass("O") && sq8.hasClass("O") && sq9.hasClass("O")){
    return oWin = true;
   }
}

// Reset button
  $('#reset').on('click', function() {
  	clearBoard();
  })

function winnerCheck(){
  if (xWin == true) {
    alert("X has won");
    $("#playerTurn").html("X wins!");
    return gameEnd = true;
  }
  if (oWin == true) {
    alert("O has won");
    $("#playerTurn").html("O wins!");
    return gameEnd = true;
  }
}

});
