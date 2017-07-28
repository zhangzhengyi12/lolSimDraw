/**
 * Created by zhang on 2017-07-28.
 */
let moneyGold = (function () {
    let money = 0
    return {
        isEnough(n){
            if(n >= money){
                return false
            }
            return true
        },
        pay(n){
            money  -= n;
            this.setDis()
        },
        add(n){
            money += n
            alert("恭喜你获得了 " + money + " 个黄金星辰");
            this.setDis()
        },
        check(){
            return money;
        },
        setDis(){
            $("#iGoldNum").text(money)
        }
    }
})()

export  default moneyGold