/**
 * Created by zhang on 2017-07-27.
 */

let money = (function () {
    let money = 0
    return {
        isEnough(n){
            if(n >= money){
                return false
            }
            return true
        },
        pay(n){
            return money -= n;
            this.setDis()
        },
        add(n){
            money += n
            alert("恭喜你获得了 " + money + " 个奥术星辰");
            this.setDis()
        },
        check(){
            return money;
        },
        setDis(){
            $("#iColorNum").text(money)
        }
    }
})()

export  default money