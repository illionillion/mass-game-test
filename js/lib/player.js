export class Player{
    constructor(table){
        this.playerRow=table.playerRow;
        this.playerCol=table.playerCol;
        this.status="up";
        this.image={"up":"↑","down":"↓","left":"←","right":"→"};
    }
    turn(stat){
        this.status=this.image[stat];
    }
    frontstep(){
        switch (this.status) {
            case "up":
                if (this.playerRow-1>=0) {
                    this.playerRow--;
                    // table.playerRow=this.playerRow;
                }
                break;
            case "down":
                if (this.playerRow+1<=9) {
                    this.playerRow++;
                    // table.playerRow=this.playerRow;
                }
                break;
            case "left":
                if (this.playerCol-1>=0) {
                    this.playerCol--;
                    // table.playerCol=this.playerCol;
                }
                break;
            case "right":
                if (this.playerCol+1<=9) {
                    this.playerCol++;
                    // table.playerCol=this.playerCol;
                }
                break;
            default:
                break;
        }
    }
}