export class P{
    constructor(Pobj,Tobj){
        this.Pactions=Pobj;
        this.Tactions=Tobj;
        this.actionArr=[];
    }
    wait = async (ms) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(); // setTimeoutの第一引数の関数として簡略化できる
          }, ms)
        });
      }
    testAsync(){
        return new Promise((resolve,reject)=>{
            //here our function should be implemented 
            setTimeout(()=>{
                console.log("Hello from inside the testAsync function");
                resolve();
            ;} , 2000
            );
        });
    }

    // async 
    Frontstep(){
        // setTimeout(() => {
            // await this.testAsync();
            // await this.wait(1000);
            // this.actionArr.push();
            // var startMsec = new Date();
            // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
            // while (new Date() - startMsec < 1000);
            this.Pactions.frontstep();
            this.Tactions.move();

        // }, 1000);
    }

    // async 
    Turn(allow){
        // setTimeout(() => {
            // await this.testAsync();
            // await this.wait(1000);

            // var startMsec = new Date();
            // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
            // while (new Date() - startMsec < 1000);
            this.Pactions.turn(allow);
            this.Tactions.move();

            // }, 1000);
    }
}