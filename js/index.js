/**
 * Created by Administrator on 2017/7/24.
 */
var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
    onSlideChangeEnd :function(swiper){
        var slideAry = swiper.slides; /*所有的滑块*/
        var trueSlideNum = slideAry.length-2;/*真实的滑块的个数*/
        var lastNum =  trueSlideNum+1;/*最后一个滑块的索引*/
        /*获得当前滑块的索引*/
        var curIn = swiper.activeIndex;
        [].forEach.call(slideAry,function(item,index){
            item.id = null;
            if(curIn == index){
                /*第一张跟真实滑块最后一张是一样的，最后一张跟真实滑块的第一张是一样*/
                switch(curIn){
                    case 0 :
                        item.id = "page"+trueSlideNum;
                        break;
                    case lastNum :
                        item.id  = "page1";
                        break;
                    default :
                        item.id = "page"+curIn;

                }
            }

        })

    }
})

~(function(){
    var music = document.querySelector(".music");
    var audioMusic = document.querySelector("#audioMusic");
    music.addEventListener("click",function(){
        if(audioMusic.paused){/*判断是否是停止*/
            audioMusic.play();
            music.className = "music musicMove";
            return;
        }
        audioMusic.pause();
        music.className = "music";
        music.style.opacity  = 1;
    });
    window.setTimeout(function(){
        audioMusic.play();/*播放*/
        /*边播放边缓存，触发事件canplay*/
        audioMusic.addEventListener("canplay",function(){
            music.className = "music musicMove";
        })
    },1000)

    // 如果需要分页器
    //pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    //scrollbar: '.swiper-scrollbar',
})