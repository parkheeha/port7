$(function(){
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
    $(".notice ").stop().animate({ marginTop: "-20px" }, function () {
        $(".notice").stop().css({ marginTop: "0px" });
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

})


