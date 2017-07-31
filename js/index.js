(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //首页开始游戏按钮
    $('#startGameBtn').on('click',function () {
        window.location.href = 'index1.html';
    });
    //查看以往战绩按钮
    $('.history').on('click',function () {
        window.location.href = 'index3.html';
    });
    //活动规则弹窗
    $('#hdgzBtn').on('click',function () {
        $('.tc.hdgz').fadeIn();
        showMask();
    });
    //关闭活动规则弹窗
    $('.tcClose').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    $('.tcBtn-1.xx').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //游戏玩法闪烁
    function timer() {
        $('.wanfa').fadeToggle(1000);
        setTimeout(timer);
    };
    timer();
    //游戏玩法弹窗
    $(".wanfa").on('click',function () {
        $('.tc.tc-wanfa').fadeIn();
        showMask();
    });
    //主页富豪榜按钮
    $('.fuhao').on('click',function () {
        window.location.href = 'index2.html';
    });
    //富豪榜页返回主页按钮
    $('.backHome').on('click',function () {
        history.go(-1);
    });
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    function showMask1(){
        $("#mask_1").css("height",$(document).height());
        $("#mask_1").css("width",$(document).width());
        $("#mask_1").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }
    function hideMask1(){
        $("#mask_1").hide();
    }

    //主页掷骰子
    var $sz = $('#sz');
    $('#rock').on('click',function () {
        $sz.attr("class", "shaizi");
        var num = Math.floor(Math.random() * 6 + 1);
        $sz.animate({left: '+2px'}, 100, function () {
            $sz.addClass("sz-t");
        }).delay(200).animate({top: '-2px'}, 100, function () {
            $sz.removeClass("sz-t").addClass("sz-s");
        }).delay(200).animate({opacity: 'show'}, 600, function () {
            $sz.removeClass("sz-s").addClass("sz-e");
        }).delay(100).animate({left: '2px', top: '1.3rem'}, 100, function () {
            $sz.removeClass("sz-e").addClass("sz-" + num);
            $('.userNum').html("<p>今日点数：<span>" + num + "</span>");
            $('#rock').addClass('default');
            $('#rock div').text('明日再来');
            $('.my.num').text(num);
            $('#tcNum').text(num);
            $('#num_1').text('0');
            $('#rock').unbind('click');
            $('.tc-yq').fadeIn();
            showMask();
        });
    });
    //主页邀请好友按钮
    $('.btn2-2').on('click',function () {
        $('.fenxiang').fadeIn();
        showMask1();
    });
    //弹窗邀请按钮
    $('#tcyq').on('click',function () {
        $(this).parent().fadeOut();
        $('.fenxiang').fadeIn();
        hideMask();
        showMask1();
    });
    //分享遮罩层点击消失
    $('#mask_1').on('click',function () {
        $('.fenxiang').fadeOut();
        hideMask1();
    });
    //主页领取流量
    $('.getWrap.active').on('click',function () {
        $('.tc-ll.one').fadeIn();
        showMask();
    });
    //领流量弹窗取消按钮
    $('#tcqx').on('click',function () {
        $(this).parent().parent().fadeOut();
        hideMask();
    });
    //领流量确定按钮
    $('#tcllqd').on('click',function () {
        $(this).parent().parent().fadeOut();
        $('.tc-ll.two').fadeIn();
    });
    //领流量弹窗确定领取按钮
    $('#tcert').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //主页输赢颜色
    window.setInterval(function () {
        $('.list li .win-los .result.top').each(function (index,ele) {
            if(ele.innerText == '赢'){
                ele.style.color = '#f92b31';
            }else if(ele.innerText == '输'){
                ele.style.color = '#2c50ea';
            }
        });
    },0);
    //好友页我也要玩按钮跳转到首页
    $('.wywBtn').on('click',function () {
        window.location.href = 'index.html';
    });

    //好友掷骰子页比一比按钮
    $('.bdxBtn').on('click',function () {
        var num = Math.floor(Math.random() * 6 + 1);
        $('.tc-dx.one').fadeIn();
        $('.hyNum').text(num);
        $('.panzi.r img').attr('src',"images/" + num + ".png");
        showMask();
    });
    //点击抽选大小按钮
    $('#cdxBtn').on('click',function () {
        $('#biBtn').hide();
        $('#hyName').text('好友的名字');
        var timer = window.setInterval(function () {
            $('.small.box').toggleClass('act');
            $('.big.box').toggleClass('act');
            window.setTimeout(function () {
                if(num === 1){
                    $('.small.box').addClass('act');
                    $('.big.box').removeClass('act');
                    $('#dx').text('小');
                }else if(num === 2){
                    $('.small.box').removeClass('act');
                    $('.big.box').addClass('act');
                    $('#dx').text('大');
                }
            },250);
        },500);
        var num = Math.floor(Math.random() * 2 + 1);
        window.setTimeout(function () {
            window.clearInterval(timer);
            $('#cdxBtn').parent().fadeOut();
            $('.tc-dx.two').fadeIn();
        },2000);
    });
    //确定按钮
    $('.queding').on('click',function () {
        window.location.href = 'index5.html';
        $(this).parent().parent().fadeOut();
        hideMask();
    });
});
