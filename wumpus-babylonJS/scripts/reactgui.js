//import * as caveModule from './caves.js';

"use strict";

var cave;// = require ("Cave");
// Called by the "new-game" onclick action in the window.onload call
// - launch the new game form that asks for the player's name
// - when the user clicks the "go" button in the dialog
//   - initialize GameControl
//   - load the game canvas for the user (maze)
//   - close the new game dialog 
var dialog;
function newGameDialog() {
    dialog = document.getElementById("dialog-form");
    dialog.className = "onScreen";
    dialog.title = "new game";
    document.getElementById("form-label").innerText = "player name:";
    if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        alert("The <dialog> API is not supported by this browser");
      }
    //document.getElementById("dialog-form").style.display = "block";
    document.getElementById("startgame").onclick = startgame;
    /*document.getElementById("dialog-form").dialog({
        autoOpen: true,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
            "go": function () {
                // create the wumpus main objects (game control manages them all)
                //gameControl = new GameControl();

                canvas.className = "offScreen onScreen";
                cave = new Cave();
                ReactDOM.render(
                    cave,
                    document.getElementById('canvas')
                  );
                // close the new game dialog
                (this).dialog("close");  
            }
        }
    });*/
}

  // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
  /*dialog.addEventListener('close', function onClose() {
    startgame();
  });*/

function startgame(){
    // create the wumpus main objects (game control manages them all)
    //gameControl = new GameControl();

    canvas.className = "onScreen";
    cave = new Cave();
    ReactDOM.render(
        cave,
        document.getElementById('canvas')
      );
    // close the new game dialog
    //document.getElementById("dialog-form").className = "offScreen";  
    document.getElementById("logo").className = "offScreen";
    }
// When the HTML Window Loads
// - get the Canvas element for use
// - capture the onclick action from the "new-game" button
//   - call the newGame function to run the dialog and initialize the game
window.onload = function () {
    var canvas = document.getElementById("canvas");

    document.getElementById("new-game").onclick = newGameDialog;

    // add a resize listener for React not Babylon
    /*window.addEventListener("resize", function () {
        engine.resize();
    });*/
};