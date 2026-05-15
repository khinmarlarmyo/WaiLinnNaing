$(document).ready(function () { 
    $("h1").html("Hello, World!");// testing basic step

    $("div").click(function () {
        alert("Hello, I am from click event")
    }); // testing click event

    $(".click-btn").click(function () {
        $(".hide-show-txt").hide();
        $(this).text("Double Click Me To Show");
    }); // CLICK TEST
    $(".click-btn").dblclick(function () {
        $(".hide-show-txt").show();
        $(this).text("Click Me To Hide");
    }); // DBL CLICK TEST
    $(".mouse-enter-leave").mouseenter(function () {
        $(".enter-leave-txt").text("- Thanks You Four Joining Us!!!")
        $(".enter-leave-txt").css({ "background-color": "green", "color": "white" });
    });
    $(".mouse-enter-leave").mouseleave(function () {
        $(".enter-leave-txt").text("- Bye Bye, See yah next time!!")
        $(".enter-leave-txt").css({ "background-color": "red", "color": "black" });;

    });
    // mouse down & up
    $(".mouse-down-up").mousedown(function () {
        $(".down-up-txt").text("- Mouse is being downed");
    })
    $(".mouse-down-up").mouseup(function () {
        $(".down-up-txt").text("Mouse is being up");
    })
    // hover test 
    $(".hover").hover(function () {
        $(this).text("Hovering Me");
    }, function () {
        $(this).text("Leaved me");
    })
    // theme light mode dark mode
    $(".theme-btn").click(function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(".dark").hide();
            $(".light").show();
        } else {
            $(".dark").show();
            $(".light").hide();
        }
    })

    $("#name-input").focus(function(){
        $(this).css({"background-color":"transparent","border":"1px solid gray"});
        $(this).attr('placeholder','is being focused')
    })
$("#name-input").blur(function(){
  $(this).css("background-color", "#36ca31");
  $(this).attr('placeholder','is being blured')
});

$(".on-test").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
$("#message").keyup(function() {
    $(".keyup-output").text("You released a key! Current value: " + $(this).val());
});
$("#message").keypress(function() {
    $(".keypress-output").text("You key pressed! Current value: " + $(this).val());
});
$("#message").keydown(function() {
    $(".keydown-output").text("You key downed! Current value: " + $(this).val());
});
$("form").submit(function(e) {
    e.preventDefault();  
    alert("Form submitted!");
});
 
$("select").change(function(){
    alert("You Selected: "+$(this).val());
})

// about window
$(window).resize(function() {
    $(".resize-txt").text("Window Width: " + $(window).width());
});

$(window).scroll(function() {
    $(".scroll-txt").text("You are scrolling!");
});
 

 
}); 
