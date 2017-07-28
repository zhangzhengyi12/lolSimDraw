/**
 * Created by zhang on 2017-07-27.
 */

//TODO 需要随机滚动 传入参数对象 默认值 图片的张数，总长度
//TODO set1 随机下一个定位点 set2 设置图片left




class scrollImg {
    constructor(config = {}){
        this.imgBox = config.imgBox;
        this.imgAllWidth = config.imgAllWidth;
        this.imgNumber = config.imgNumber;
        this.imgWidth = this.imgAllWidth/this.imgNumber;
        this.time = null;
        this.buttonBox = config.buttonBox;
        this.imgBox.attr("number",0);
    }
    
    startScroll(){
        this.setScroll()
        this.bindEvent()
    }
    
    //计算下一个目标图片的下标
    calcNextNumber(){
        let currImg = parseInt(this.imgBox.attr("number"))
        let target = currImg+1;
        if(target > this.imgNumber-1){
            target =0;
        }
        return target;
        
    }
    
    //绑定按钮事件
    bindEvent(){
        this.buttonBox.find("span").on("mouseover",(e)=>{
            this.activeButton($(e.target).index())
            this.scrollTo($(e.target).index());
            clearInterval(this.time)
        })
    
        this.buttonBox.find("span").on("mouseout",(e)=>{
            this.setScroll();
        })
    }
    
    //设置自动滚动事件
    setScroll(){
        this.time = setInterval(()=>{
            let targetNumber = this.calcNextNumber()
            this.activeButton(targetNumber)
            this.scrollTo(targetNumber)
        },1000)
    }
    
    
    scrollTo(eq){
        let targetLeft = eq*this.imgWidth
        //取消其他动画
        this.imgBox.stop()
        this.imgBox.animate({
            left:"-" + targetLeft+ "px"
        },200)
        this.imgBox.attr("number",eq)
    }
    
    activeButton(index){
        this.buttonBox.find("span").eq(index).addClass("on").siblings().removeClass("on")
    }
    
}

export default scrollImg;