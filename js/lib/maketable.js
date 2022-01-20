export class Table{

    constructor(){
        this.row=10;
        this.col=10;
        this.playerRow=9;
        this.playerCol=0;
        this.table=null;
    }

    create(ele){
        let table_ele=document.querySelector(ele);
        this.table=table_ele;
        let tr_fragment=document.createDocumentFragment();
        //row
        for (let r = 0; r < this.row; r++) {
            let tr_ele=document.createElement("tr");
            let td_fragment=document.createDocumentFragment();
            //col
            for (let c = 0; c < this.col; c++) {
                let td_ele=document.createElement("td");
                // td_ele.innerHTML=" ";
                td_ele.dataset.row=r;
                td_ele.dataset.col=c;
                if (r==this.playerRow&&c==this.playerCol) {
                    td_ele.innerHTML="↑";
                    td_ele.dataset.point="now";
                }
                td_fragment.appendChild(td_ele);
            }
            tr_ele.appendChild(td_fragment);
            tr_fragment.appendChild(tr_ele);
        }
        table_ele.appendChild(tr_fragment);
    }

    playerfetch(player){
        this.playerRow=player.playerRow;
        this.playerCol=player.playerCol;
    }

    move(){
        // console.log(this.table.querySelector("td[data-point='now']"));
        this.table.querySelector("td[data-point='now']").innerHTML="";
        //rowとcolが一致するやつをたたく
    }
}