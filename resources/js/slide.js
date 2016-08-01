$(function(){
    $("#navRight").delay(500).show(2).addClass("fadeInRight cur");
    $(".backTop").click(function(){
        $("body,html").animate({
            scrollTop: 0
        }, 500, 'easeInSine');
    });

    $("#navRight").delay(3000).animate({right:"-130px"},500,'easeOutSine',function(){$("#navRight .close").html("展<br>开")}).removeClass("cur");
    $("#navRight .close").click(function(){
        if($(this).text()=="收起"){
            $("#navRight .close").html("展<br>开");
            $("#navRight").stop().animate({right:"-130px"},500,'easeOutSine').removeClass("cur");
        }else{
            $("#navRight").stop().animate({right:"23px"},500,'easeOutSine').addClass("cur");
            $("#navRight .close").html("收<br>起");
        }

    });
    $(window).scroll(function(){
        if($(window).scrollTop()>500&&$(window).scrollTop()<$(document).height()-$(window).height()-400){
            $("#arrowDown").fadeIn()
        }
        if($(window).scrollTop()<=500){
            $("#arrowDown").fadeOut()
        }
        if($(window).scrollTop()>=$(document).height()-$(window).height()-500){
            $("#arrowDown").fadeOut()
        }
    })
    if($(window).width()<=1440){
        $("#product .proList .imgList .hide .close,#index .banners .shoushi,#navRight,#farmTrip .markets .hide .close,#about .team .teamBox .hide,#case .caseList").addClass("cur1440")
    }
    if($(window).width()<=1366){
        $("#farmTrip .markets .hide,#product .proList .imgList .hide,#case .caseList").addClass("cur1366")
    }
    $("#nav .navList>li").hover(function(){
        $(this).children("ol").slideDown()
    },function(){
        $(this).children("ol").stop().slideUp()
    })
})
