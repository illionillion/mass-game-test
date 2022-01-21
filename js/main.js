"use strict";
import { Table } from "./lib/maketable.js";
import {Player} from "./lib/player.js";
import {P} from "./lib/action.js";

(function(){
    let tables=new Table();
    tables.create("#screen");
    let player=new Player(tables);
    let $=new P(player,tables);
    // $.Frontstep();
    document.querySelector("#run-btn").addEventListener("click",function(){
        // (function(){
      
        eval(document.querySelector("#editor").value);

        // }())
    
    })

    // 一歩進む
    // player.frontstep();
    // tables.move();

    // console.log(tables);
    // console.log(player);
    
    // ("向き")に方向転換
    // player.turn("right");
    // tables.move();
    

    // player.frontstep();
    // player.frontstep();
    // tables.move();
    // console.log(tables);
    // console.log(player);


    
    

}())