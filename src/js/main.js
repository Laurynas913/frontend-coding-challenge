'use strict';
//animation after form is submitted
function move() {
$('.box')
    .velocity({height:"20%"})
    .velocity({translateY: "20px"});
$('.inside')
    .velocity("slideUp", { duration: 500 });
$('#thanks')
    .delay(500)
    .velocity({opacity:1}, { display: "block" });
$('#another')
    .delay(500)
    .velocity({opacity:1}, { display: "block" });
};

//validation
$.validate({
      form: "#data-collect",
      showErrorDialogs : false,
      onSuccess: function() {
          move();
      }
});

//end message
 $(function(){
      $("#data-collect").submit(function(e) { 
          var value = "Thank you for your time, " +$("#firstname").val() + ". \ We will be in touch.";          
          $('#thanks').text(value);
          e.preventDefault();
      });
  });
