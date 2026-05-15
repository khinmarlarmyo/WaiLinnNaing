$(document).ready(function () {
    $(".change-btn").click(function(){
        $("h1").text("Hello World !!"); // set
        alert("h1 heading is"+ $("h1").text());
        $("h1").html("<i>My Fri</i>");
        alert("h1 heading html tag"+$("h1").html())
        alert("h1 value is"+$("#input-value").val())
    }) // get set testing using .text and .html

    $(".change-url").click(function(){
        $(".url").attr("href",function(i,origin){
           return origin+"/search?q=w3school"
        });
    }) // change attr href

    var appendcount=1;
    $(".btn-append").click(function(){
        $("ol").append("<li class='item-append'>Append Item - "+appendcount+" </li>")
        appendcount++;
    }) // append

    var prependcount=1;
    $(".btn-prepend").click(function(){

            $("ol").empty();
            for (let i=prependcount;i>0;i--){
                $("ol").prepend("<li class='item-prepend'>Prepend Item - "+i+" </li>")
            }
            if (appendcount!==1) {
                
                for (let index = prependcount+1; index < appendcount+prependcount; index++) {
                     $("ol").append("<li class='item-append'>Append Item - "+index+" </li>")
                }
            } 
        prependcount++;
    }) // append + prepend show properly

    $('.before-btn').click(function(){
        $('.before-after-txt').before("HEE.")
    }) // before

    $('.after-btn').click(function(){
        $('.before-after-txt').after("HAA.")
    }) // after

    $('.hide-btn').click(function(){ 
        $('p').remove(".test1 ,.test2")
    }) // remove

    $('.red-btn').on('click',function(){
        $('.add-remove-class').addClass('txt-red');
    }) // addClass
    $('.remove-btn').on('click',function(){
        $('.add-remove-class').removeClass('txt-red');
    }) // reomveClass

     $(".wh-btn").click(function(){
        $('.document-wh-txt').html("<i>Document width/height: " + $(document).width()+"x" + $(document).height()+"</i>")
        $('.window-wh-txt').text("Window width/height: " + $(window).width()+"x" + $(window).height())
 
  }); // getting diemension for Window and Document
});