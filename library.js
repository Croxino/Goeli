
$.fn.colorChanger = function(changeColor) {
    this.css( "color", changeColor );
}

$.fn.bounce = function(maxHeight){

var loop = true;
var test = 5;




for (i = 0 ; i < test; i++) {
			$("#bounceimg").animate({bottom:"0px"})
			  		   .css("position", "relative");			
		$("#bounceimg").animate({bottom:maxHeight});
		
 } 
 $("#bounceimg").animate({bottom:"0px"})
		console.log(test);
}

			  

	// if (loop == true) {
	// 	($.fn.bounce(maxHeight));

	// }




$.fn.jump = function(maxHeight){
			  this.animate({bottom:maxHeight})
			  	  .animate({top:"0px"})
			  	  .css("position", "relative");
}



$.fn.inputFields = function(){

	$("button").click(function(){
			var textBox =  $.trim( $('input[type=text]').val() )
		if(textBox == "")
		{
			alert("fields must contain characters");
		}
	})
}
