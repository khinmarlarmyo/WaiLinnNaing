$(document).ready(function () {
    walkLoop()
    function showH1(){
        $(".hide-txt").show(1000);
    }
    $(".btn").click(function(){
        $(".hide-txt").hide(1000,showH1);
    })
    var count=0;
    function usedTimes(){  
        count++;
        $(".toggle-txt").text("you are using toogle "+count+" times")        
    } 
    $(".toggle").click(function(){ 
        $(".toggle-txt").toggle(2000,usedTimes);
    })

    $(".toggle-fadein").click(function(){
        $(".toggle-fadein-txt").fadeToggle(1000);
    })

    $(".slide-toggle").click(function(){
        $(".slideToggle-img").slideToggle();
    })

    $(".btn-chain").click(function(){
        $(".j-chain-txt").slideUp(2000).slideDown(2000);
        // $(".j-chain-txt").fadeOut(2000).fadeIn(2000);
    })

    
function walkLoop() {
    var $person = $(".walker");
    var $path = $(".sidewalk");
     
    var travelDistance = $path.width() - $person.width(); 
    $person.animate({ left: travelDistance }, 10000, "linear", function() { 
        $person.removeClass("facing-left"); 
        $person.animate({ left: "0px" }, 10000, "linear", function() { 
            $person.addClass("facing-left"); 
            walkLoop();
        });
    });
}
});