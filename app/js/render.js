/**
 * Created by zhang on 2017-07-27.
 */
//获取图片 推入数组 然后开始检查Onload状态 完成就promise 然后遍历插入fade in;
class render{
    constructor(config = {}){
        this.box = config.box;
        this.img = [];
        this.clearBox = config.clearbox
        this.ewbox = config.ewbox
        this.type = config.type
        this.titleBox = config.titleBox
    }
    
    renderBox(res){
        this.model()
        if(this.titleBox){
            this.settile()
        }
        this.setBoxStyle()
        this.getImg(res)
        this.disImg()
        this.bindEvent()
    }
    
    renderClose(){
        this.box.fadeOut()
        this.img = [];
        if(this.ewbox){
            console.log("ewemp");
            this.ewbox.empty()
        }
        this.clearBox.empty();
        this.removeModel()
    }
    
    setBoxStyle(){
        this.box.css("top","2600px")
        this.box.css("left","100px")
        this.box.css('position',"absolute")
        this.box.css('z-index',"999")
        this.box.fadeIn()
    }
    
    getImg(res){
        //基本转移
        let link ="http://ossweb-img.qq.com/images/lol/appskin/"
        for(var i=0,len=res.length; i<len; i++){
            let item = []
            let img = new Image();
            img.src = link+res[i][0] + ".jpg";
            
            item.push(img)
            item.push(res[i][1])
            item.push(res[i][2])
            
            this.img.push(item)
        }
        
    }
    
    disImg(){
        //检查img是否都加载完成
        new Promise((resolve,reject)=>{
            let ul = $(`<ul></ul>`)
            let loadNumber = 0
            let loadTimer
            
            for(var i=0,len=this.img.length; i<len; i++){
                if(i >= len-1 && this.ewbox){
                    this.addEw(this.img[i]);
                    continue;
                }
                
                let img = this.img[i][0]
                img.onload = ()=>{
                    loadNumber++;
                }
                
                let li = $(`<li></li>`)
                let div = $(`<div></div>`)
                let span = $(`<span></span>`)
    
                span.text(this.img[i][1])
                
                div.append(img)
                li.append(div)
                li.append(span)
                
                if(this.img[i][2]){
                    li.append($(`<i class="ts-cover"></i>`))
                }
                
                li.hide();
                ul.append(li)
            }
    
            
            
            
            
            this.clearBox.append(ul)
            
    
            loadTimer = setInterval(()=>{
                //十连抽一半载入完成就触发 一抽单张图片触发
                if(loadNumber >= (this.img.length/1.6)+1){
                    resolve(ul)
                    clearInterval(loadTimer);
                }else if(!this.ewbox && loadNumber>=1){
                    resolve(ul)
                    clearInterval(loadTimer);
                }
            })
            
            
            
        }).then((ul)=>{
            
            for(var i=0,len=ul.children().length+1; i<len; i++){
                
                ((i)=>{
                    setTimeout(()=>{
                        ul.find("li").eq(i).fadeIn()
                        if(this.ewbox && i >= len-1){
                            this.ewdis()
                        }
                    },i*700)
                })(i)
            }
        })
        
    }
    
    addEw(img){
        
        let dom = $(`<div class="ew_txt" style="font-size:16px; color:#fff; font-weight:bold; padding:20px 0 0 21px; text-align:left;">恭喜！额外赠送您<br><span style="color:#ffe61b">河蟹陛下守卫</span>一个</div>

<ul><li class="a" style=""><div id="imgWrap"></div><span>${img[1]}</span></li></ul>`)
        
	    
        dom.find("#imgWrap").append(img[0])
        dom.hide();
        this.dom = dom;
        this.ewbox.append(dom)
        
    }
    
    ewdis(){
        this.dom.fadeIn();
    }
    
    bindEvent(){
        this.box.find(".pop-close").on("click",()=>{
            this.renderClose();
        })
    }
    
    model(){
        let model = $("<div></div>")
        model.css("position","absolute")
        model.css("top","0")
        model.css("left","0")
        model.css("bottom","0")
        model.css("right","0")
        model.css("opacity","0")
        model.css("z-index","99")
        this.modeldiv = model
        $("body").append(model)
    }
    
    removeModel(){
        this.modeldiv.remove()
    }
    
    //设置标题
    
    settile(){
        if(this.type === "color"){
            this.titleBox.text("您的运气不错，打开10个神敢达的痴情礼盒后发现：")
        }else if(this.type === "gold"){
            this.titleBox.text("您的运气不错，打开10个新丰真龙的贤惠礼盒后发现：")
        }
    }
}


export default  render;
