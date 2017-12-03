$(function () {
    //鼠标放在第二个导航图标显示
    $('.nav li').eq(1).hover(function () {
        $('.class-name').show()
    }, function () {
        $('.class-name').hide()
    });

//    搜索框放大
    $('.search').focus(function () {
        $(this).stop().animate({'width': '120px'}, 500).blur(function () {
            $(this).stop().animate({'width': '70px'}, 500);
        })
    });

//    手风琴区域

    $('.squeezebox div + div').css({
        width: 199,
        height: 350
    });

    $('.squeezebox div:first-child').css({
        width: 390,
        height: 450
    });
    $('.squeezebox div ').mouseover(function () {

        // $('.squeezebox div').stop();
        $(this).siblings().css('transition-duration ', '0s');
        $(this).css('transition', 'all 1s');
        $(this).stop().css({width: 390, height: 450}, 100).siblings().css({width: 199, height: 350}, 100);

        $(this).siblings().removeClass('active').addClass('small');

        $(this).addClass('active').removeClass('small');

        $(this).empty().html(' <p>教</p>\n' + '<ul>\n' + '<li>\n' + '<h4>互动视频</h4>\n' + '<span>视频弹题,边学边巩固,让学员爱上学习</span>\n' + '</li>\n' + '<li>\n' + '<h4>互动视频</h4>\n' + '<span>视频弹题,边学边巩固,让学员爱上学习</span>\n' + '</li>\n' + '<li>\n' + '<h4>互动视频</h4>\n' + '<span>视频弹题,边学边巩固,让学员爱上学习</span>\n' + '</li>\n' + '</ul>').siblings().empty().html(' <img src="images/product_intro_2.png" alt="">\n' + '<p>学</p>\n' + '<ul>\n' + '<li>笔记</li>\n' + '<li>问答</li>\n' + '<li>学习计划</li>\n' + '</ul>')
    });

//    第二部分轮播图
    var index1=0;
    var index2=0;
    $('.left').click(function () {
        index1++;
        index2++;
        if(index1>2)
        {
            index1=1;
            $('.background-img').css('left',0)
        }
        if(index2>1)
        {
            index2=1;
            $('.center_content>ul').css('left',0)
        }
        $('.background-img').stop().animate({
            'left':-100*index1+'%'
        });
        $('.center_content>ul').stop().animate({
            'left':-100*index2+'%'
        })
    });
    $('.right').click(function () {
        index1--;
        index2--;
        if(index1<0)
        {
            index1=1;
            $('.background-img').css('left','-200%')
        }
        if(index2<0)
        {
            index2=0;
            $('.center_content>ul').css('left','-100%')
        }
        $('.background-img').stop().animate({
            'left':-100*index1+'%'
        });
        $('.center_content>ul').stop().animate({
            'left':-100*index2+'%'
        })
    });

//    数字的变化
    var a=10;
    var b=170;
    var c=280;
    var d=530;
    var e=610;
    var f=0;
    var h=0;
    var index=0;
    var flag=true;
    var flag2=true;
    $(window).scroll(function () {
        if ($(this).scrollTop()>2700&&flag==true)
        {
            flag=false;
            var timer=setInterval(function () {
                index++;
                a+=1;
                b+=1;
                c+=1;
                d+=1;
                e+=1;
                f+=1;
                h+=1;
                var data1=a+','+b;
                var data2=c+','+d+','+c;
                $('.data-change').eq(0).html(data1);
                $('.data-change').eq(1).html(data2);
                $('.data-change').eq(2).html(data2);
                if (index>300)
                {
                    clearInterval(timer)
                }
            },10)
        }
        if ($(this).scrollTop()>4200 && flag2==true)
        {
            flag2=false;
            var timer2=setInterval(function () {
                index++;
                a+=1;
                b+=1;
                c+=1;
                d+=1;
                e+=1;
                f+=1;
                h+=1;
                // var data2=c+','+d+','+c;
                var data2=c+','+d+','+c;
                $('.recovery strong').eq(0).html(data2);
                if (index>300)
                {
                    clearInterval(timer2)
                }
            },10)
        }
    })
});