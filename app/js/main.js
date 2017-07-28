/**
 * Created by zhang on 7/7/2017.
 */

import titile from "./title.js";
import scroll from "./scroll.js"
import draw from "./draw"
import money from "./money"
import moneyGold from "./moneyGold"

//stop解决动画滞留问题

//待会都放入Init中

let scroll1 = new scroll({
    "imgBox":$("#J_hbimg1Cont"),
    "imgAllWidth":1700,
    "imgNumber":5,
    "buttonBox":$("#J_hbimg1")
}).startScroll()

let scroll2 = new scroll({
    "imgBox":$("#J_hbimg2Cont"),
    "imgAllWidth":2380,
    "imgNumber":7,
    "buttonBox":$("#J_hbimg2")
}).startScroll()



money.add(1000)
moneyGold.add(1000)



let draw10 = new draw({
    type:"color",
    button:$("#drawButton1s"),
    times:10,
    box:$("#GetItem2"),
    clearbox:$("#GetItem2_info"),
    ewbox:$("#GetItem2_EX"),
    titleBox:$("#GetItem2_title")
});

let draw1 = new draw({
    type:"color",
    button:$("#drawButton"),
    times:1,
    box:$("#GetItem1"),
    clearbox:$("#GetItem1_info")
})


let draw10gold = new draw({
    type:"gold",
    button:$("#drawButtonGold"),
    times:10,
    box:$("#GetItem2"),
    clearbox:$("#GetItem2_info"),
    ewbox:$("#GetItem2_EX"),
    titleBox:$("#GetItem2_title")
});

let draw1gold = new draw({
    type:"gold",
    button:$("#drawButtonGold1s"),
    times:1,
    box:$("#GetItem1"),
    clearbox:$("#GetItem1_info")
})




