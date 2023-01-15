
$(document).ready(function(){


    $('#main_box').click(function(){
        $('#main_box').css("background-image", "linear-gradient(to bottom right, #94a3b8, #475569)");
        $('img').css("border", "none");
        //comment this out when you have figured out what event.stopPropagation is used for
     })
     $('.mini_boxes').click(function(event){
        event.stopPropagation(); // an improtant function to remember
        $('#main_box').css("background-image", "url(" + $(this).attr("src")) + ")";
        $('img').css("border", "none");
        $(this).css("border", "2px solid #facc15");
     })
});