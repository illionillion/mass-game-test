export class Player{
    constructor(table){
        this.table_ele=table;
        table.playerfetch(this);
        this.playerRow=table.playerRow;
        this.playerCol=table.playerCol;
        this.status="up";
        this.image={"up":"↑","down":"↓","left":"←","right":"→"};
    }
    turn(stat){
        this.status=stat;
    }
    frontstep(){
        switch (this.status) {
            case "up":
                if (this.playerRow-1>=0) {
                    this.playerRow--;
                    console.log(this);
                    this.table_ele.playerRow=this.playerRow;
                }
                break;
            case "down":
                if (this.playerRow+1<=9) {
                    this.playerRow++;
                    this.table_ele.playerRow=this.playerRow;
                }
                break;
            case "left":
                if (this.playerCol-1>=0) {
                    this.playerCol--;
                    this.table_ele.playerCol=this.playerCol;
                }
                break;
            case "right":
                if (this.playerCol+1<=9) {
                    this.playerCol++;
                    this.table_ele.playerCol=this.playerCol;
                }
                break;
            default:
                break;
        }
    }
}