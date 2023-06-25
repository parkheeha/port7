$(function(){

    let baseline = -500;
    let pos1 = $("#box1").offset().top + baseline;
    let pos2 = $("#box2").offset().top + baseline;
    let pos3 = $("#box3").offset().top + baseline;
    let pos4 = $("#box4").offset().top + baseline;
    let pos5 = $("#box4").offset().top + baseline;
    
    vid = $("#box3").find("video").get(0);
    $(window).on("scroll",function(){
        let scroll = $(this).scrollTop();
        if(scroll >=pos1 && scroll <=pos2){
            $("#navi li").removeClass("on");
            $("#navi li").eq(0).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(0).addClass("on");

            vid.pause();

        }else if(scroll >=pos2 && scroll <pos3){
            $("#navi li").removeClass("on");
            $("#navi li").eq(1).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(1).addClass("on");

            vid.pause();

        }else if(scroll >=pos3 && scroll <pos4){
            $("#navi li").removeClass("on");
            $("#navi li").eq(2).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(2).addClass("on");

            vid.play();

        }else if(scroll >=pos4 && scroll <pos5){
            $("#navi li").removeClass("on");
            $("#navi li").eq(3).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(3).addClass("on");

            vid.pause();
           

        }else{
          $("#navi li").removeClass("on");
          $("#navi li").eq(4).addClass("on");
          $("#wrap>div").removeClass("on");
          $("#wrap>div").eq(4).addClass("on");

          vid.pause();
        
      }

    });


        $("#navi li").on("click",function(){
            let target = $(this).children("a").attr("href");
            //alert(target);
            let pos = $(target).offset().top;
            //alert(pos);
            $("html,body").stop().animate({scrollTop:pos},1000);

       

    });

    
    let total = $(".vi li").length;
    let i=0;
    setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
      $(".vi li").stop().fadeOut();
      $(".vi li").eq(i).stop().fadeIn();
    },3000);


setInterval(function () {
    $(".notice ").stop().animate({ top: "-30px" }, function () {
        $(".notice").stop().css({ top: "0px" });
        $(".notice li  ").first().appendTo(".notice");
    })
},2000);

/*
$(".text1").on("mouseenter",function(){
  $(".text1").stop().css({"border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#fff"})
},1000)
*/


$(".text1").on("mouseenter",function(){
 
  $(".text1 .underline").stop().animate({left:"0%", width:"140px"});
});

$(".text1").on("mouseleave",function(){
  $(".text1 .underline").stop().animate({right:"0%", width:"0px"});
});

        
    /*
$(".one .DOCTORSGROUP").on("mouseenter",function(){
  $(".one .DOCTORSGROUP").stop().css({"background-color":"#c2b093"});
  $(".one .DOCTORSGROUP a").stop().css({color:"#fff"});
});

$(".one .DOCTORSGROUP").on("mouseleave",function(){
  $(".one .DOCTORSGROUP").stop().css({"background-color":"#ffff"});
  $(".one .DOCTORSGROUP a").stop().css({color:"#c2b093"});
})
*/

$(".one .DOCTORSGROUP").on("mouseenter",function(){
  $(".one .DOCTORSGROUP").stop().css({"background-color":"#c2b093"});
  $(".one .DOCTORSGROUP a").stop().css({color:"#fff"});
});

$(".one .DOCTORSGROUP").on("mouseleave",function(){
  $(".one .DOCTORSGROUP").stop().css({"background-color":"#ffff"});
  $(".one .DOCTORSGROUP a").stop().css({color:"#c2b093"});
});

$("#box3 .BRANDSTORY").on("mouseenter",function(){
  $("#box3 .BRANDSTORY").stop().css({"background-color":"#c2b093"});
  $("#box3 .BRANDSTORY a").stop().css({color:"#fff"});
});

$("#box3 .BRANDSTORY").on("mouseleave",function(){
  $("#box3 .BRANDSTORY").stop().css({"background-color":"#ffff"});
  $("#box3 .BRANDSTORY a").stop().css({color:"#c2b093"});
});

$("#box4>a ").on("mouseenter",function(){
  $("#box4>a ").stop().css({color:"#fff"});
  $("#box4>a ").stop().css({backgroundColor:"#c2b093"});
});

$("#box4>a ").on("mouseleave",function(){
  $("#box4>a ").stop().css({color:"#c2b093"});
  $("#box4>a ").stop().css({backgroundColor:"#ffff"});
});

});


//alert(pos2);