"use strict";
import { Table } from "./lib/maketable.js";
import {Player} from "./lib/player.js";

(function(){
    let tables=new Table();
    tables.create("#screen");
    let player=new Player(tables);
    player.frontstep();
    tables.playerfetch(player);
    console.log(tables);
    console.log(player);
    tables.move();
}())