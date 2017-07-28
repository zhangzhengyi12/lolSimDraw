/**
 * Created by zhang on 2017-07-27.
 */

import skinJackpot from "./skinJackpot";

class algorithm {
    takeReasult(n){
        let res = [];
        let isTS = false;
        if(n===10){
            n++
        }
        for(var i=0; i<n; i++){
            let item = []
            let itemIndex = Math.floor(Math.random()*skinJackpot.item.length);
            //最后一个特殊皮肤
            if(n >= 11 && i>=10){
                isTS = true
                let itemIndex = Math.floor(Math.random()*60);
            }
            
            let key = skinJackpot.item[itemIndex]
            
            let name = this.setName(key,isTS)
            let isxy = this.isRare(itemIndex)
            
            item.push(key)
            item.push(name)
            item.push(isxy)
            res.push(item)
        }
        return res;
    }
    
    setName(key,isTS){
    //    检测 英雄 + 名字 + 是否体验
        let name  = ""
        
        if(key < 1000){
            name += "英雄  "
        }else {
            name += "皮肤  "
        }
        name += skinJackpot.respon[key]
        
        if(skinJackpot.respon[key] == undefined){
            console.log(key);
        }
        
        //特殊皮肤直接返回
        if(isTS){
            return name
        }
        
        if(Math.random()<0.5){
            name += "  七天体验"
        }
        return name
    }
    
    isRare(key){
        if(key<63){
            return true
        }
        return false;
    }
}

let algorihtms = new algorithm();

export default algorihtms