$(document).ready(function(){
    // $('#main_box').click(function(){
    //     alert('you clicked the main box!');  
    //     //comment this out when you have figured out what event.stopPropagation is used for
    //  })
    //  $('.mini_boxes').click(function(event){
    //     event.stopPropagation(); // improtant function to remember
    //     alert("you clicked a mini box!");
    //  })

     $('.mini_boxes').hover(function() {
        $('#main_box').css("background-image", "url(" + $(this).attr("src")) + ")";
    })
});