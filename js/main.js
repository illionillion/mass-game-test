"use strict";
import { Table } from "./lib/maketable.js";
import {Player} from "./lib/player.js";
import {P} from "./lib/action.js";

(function(){
    const tables=new Table();
    tables.create("#screen");
    const player=new Player(tables);
    const $=new P(player,tables);
    // Object.freeze($)
    // Object.freeze($.Turn)
    // Object.freeze($.Frontstep)
    // $.Frontstep();
    document.querySelector("#run-btn").addEventListener("click",function(){
        (function(){
      
        eval(document.querySelector("#editor").value);
        // $.call(document.querySelector("#editor").value);

        }())
        $.actionId=0;
    
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