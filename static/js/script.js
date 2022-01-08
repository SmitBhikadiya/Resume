$(document).ready(function(){
    $(".navbar-toggler").on("click",function(){
        if($(".navbar-toggler").attr("aria-expanded")=="true"){
            $(".navbar-toggler span").css("transform","rotate(180deg)");
        }   else{
            $(".navbar-toggler span").css("transform","rotate(0deg)");
        }
    });
});