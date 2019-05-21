window.onload = function () {
    autoPlay();
    //无限轮播
    function autoPlay(){
        var lis = $("template_img").getElementsByTagName("li");

        var index = 0;
        setInterval(function () {
            for(var i=0;i<lis.length;i++){
                var singerLi = lis[i];

                buffer(singerLi,{opacity:0},null);
            }

            buffer(lis[index],{opacity:1},null);

            index++;
            if (index === lis.length){
                index = 0;
            }
        },5000);
    }

    //简历轮播
    resumePlay();
    function resumePlay(){
      //拿到需要的标签
        var lis = $("resume_ul").children;
        var currentIndex =0 ,inCoderIndex = 0;

        //2 克隆一个li
        $("resume_ul").appendChild(lis[0].cloneNode(true));

        //3 动态创建页码
        for(var i = 0; i<lis.length-1;i++){
            var li = document.createElement("li");
            $("ol").appendChild(li);
        }

        //4 让第一个选中
        $("ol").children[0].className = "current"

        //5 监听鼠标进入页码中
        var olLis = $("ol").children;
        for(var j = 0 ;j < olLis.length ; j++){
            (function(j){
                var olLi = olLis[j];
                //鼠标进入
                olLi.onmouseover = function(){
                    for(var a = 0 ;a < olLis.length ; a++){
                        olLis[a].className = "";
                    }
                    this.className = "current";
                    //动起来
                    constant($("resume_ul"),-(800 * j),60);

                    currentIndex = inCoderIndex = j;
                };
            })(j);
        }

        //6 自动轮播
        var time;
        time = setInterval(autoTime,1000);

        //7  清空定时器
        $("resume_my").onmouseover = function () {
            clearInterval(time);
        };

        //开启定时器
        $("resume_my").onmouseout = function () {
            time = setInterval(autoTime,3000);
        };

        //定时器
        function autoTime(){
            //ul 滚动起来
            currentIndex++;
            if(currentIndex > lis.length-1){
                $("resume_ul").style.left = 0;
                currentIndex = 1;
            }
            constant($("resume_ul"),-currentIndex * 800,100);

            inCoderIndex++;
            if(inCoderIndex > olLis.length-1){
                inCoderIndex = 0;
            }
            for(var a = 0 ;a < olLis.length ; a++){
                olLis[a].className = "";
            }
            olLis[inCoderIndex].className = "current";
        }
    }

    //窗口的滚动和点击
    windowScroll();
    function windowScroll() {
        //拿到相关的元素
        var lis = $("tab_ul").children;
        var doms = $("content").children;
        var isClick;
        //监听鼠标的点击事件
        for(var i=0;i<lis.length;i++){
            (function (index) {
                var li = lis[i];
                li.onmousedown = function () {
                    isClick = true;
                  for(var j=0;j<lis.length;j++){
                      lis[j].className = "";
                  }
                  this.className = "current";
                  //让窗口滚动起来
                  buffer(document.documentElement,{scrollTop:index*client().height},function () {
                        isClick = false;
                    })
                };


            })(i);

        }
        //滚动窗口
        window.onscroll = function () {
            if(!isClick){
                //获取滚动窗口的值
                var roll = Math.ceil(scroll().top);
                //遍历
                for(var j=0;j<lis.length;j++){
                    if(roll >= doms[j].offsetTop){
                        for(var i=0;i<lis.length;i++){
                            lis[i].className = "";
                        }
                        lis[j].className = "current";
                    }
                }
            }
        }
    }

    //小功能
    myFunc();
    function myFunc() {
       var func_lis = $("function_ul").children;
       var img_lis = $("img_ul").children;
       for (var i = 0 ;i<func_lis.length;i++){
           (function (index) {
               var li = func_lis[i];
               li.onmousedown = function () {
                  for(var j=0;j<func_lis.length;j++){
                      func_lis[j].className = "";
                     if(index === 0){
                         img_lis[0].style.display = "block";
                         img_lis[1].style.display = "block";
                         img_lis[2].style.display = "block";
                         img_lis[3].style.display = "block";
                         img_lis[4].style.display = "block";
                         img_lis[5].style.display = "block";
                         img_lis[6].style.display = "block";
                         img_lis[7].style.display = "block";
                     }else if(index === 1){
                         img_lis[0].style.display = "block";
                         img_lis[1].style.display = "block";
                         img_lis[2].style.display = "none";
                         img_lis[3].style.display = "none";
                         img_lis[4].style.display = "none";
                         img_lis[5].style.display = "none";
                         img_lis[6].style.display = "none";
                         img_lis[7].style.display = "none";
                     }else if(index ===2){
                         img_lis[0].style.display = "none";
                         img_lis[1].style.display = "none";
                         img_lis[2].style.display = "block";
                         img_lis[3].style.display = "block";
                         img_lis[4].style.display = "none";
                         img_lis[5].style.display = "none";
                         img_lis[6].style.display = "none";
                         img_lis[7].style.display = "none";
                     }else if(index ===3){
                         img_lis[0].style.display = "none";
                         img_lis[1].style.display = "none";
                         img_lis[2].style.display = "none";
                         img_lis[3].style.display = "none";
                         img_lis[4].style.display = "block";
                         img_lis[5].style.display = "block";
                         img_lis[6].style.display = "none";
                         img_lis[7].style.display = "none";
                     }else if(index ===4){
                         img_lis[0].style.display = "none";
                         img_lis[1].style.display = "none";
                         img_lis[2].style.display = "none";
                         img_lis[3].style.display = "none";
                         img_lis[4].style.display = "none";
                         img_lis[5].style.display = "none";
                         img_lis[6].style.display = "block";
                         img_lis[7].style.display = "block";
                     }
                  }
                  this.className = "current";
               }

           })(i)
       }
    }
};
