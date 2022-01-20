"use strict";
import { Table } from "./lib/maketable.js";
import {Player} from "./lib/player.js";

(function(){
    let tables=new Table();
    tables.create("#screen");
    let player=new Player(tables);

    document.querySelector("#run-btn").addEventListener("click",function(){
        // (function(){
      
        eval(document.querySelector("#editor").value);

        // }())
    
    })

    // player.frontstep();
    // console.log(tables);
    // console.log(player);
    // tables.move();
    // player.turn("right");
    // player.frontstep();
    // player.frontstep();
    // tables.move();
    // console.log(tables);
    // console.log(player);

    
    

}())