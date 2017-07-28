/**
 * Created by zhang on 2017-07-27.
 */
//抽奖模块 负责按钮的绑定 数据中抽奖传递给其他模块 金额的验证 应该由其他地方进行绑定 不需要经常new
import money from "./money"
import moneyGold from "./moneyGold"
import algorithm from "./algorithm"
import render from "./render"

class  draw{
    constructor(config = {}){
        this.type = config.type
        this.box = config.box
        this.button = config.button
        this.times = config.times
        this.render = new render({
            'box':config.box,
            'clearbox':config.clearbox,
            'ewbox':config.ewbox,
            'type':config.type,
            'titleBox':config.titleBox
        });
        
        this.button.on("click",()=>{
            this.draw();
            money.setDis()
        })
    }
    
    draw(){
        
        if(this.type === "gold"){
            if(moneyGold.check(this.times)){
                moneyGold.pay(this.times)
                let res = algorithm.takeReasult(this.times);
                this.render.renderBox(res)
            }
            else {
                alert("钱不够")
            }
        }else if(this.type === "color"){
            
            if(money.check(this.times)){
                money.pay(this.times)
                let res = algorithm.takeReasult(this.times);
                this.render.renderBox(res)
            }
            else {
                alert("钱不够")
            }
            
        }
    }
    
}

export  default  draw
