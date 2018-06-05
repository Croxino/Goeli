
$.fn.colorChanger = function(changeColor) {
    this.css( "color", changeColor );
}

$.fn.bounce = function(maxHeight){

var loop = true;

		$("#bounceimg").animate({bottom:"0px"})
			  		   .css("position", "relative");			
		$("#bounceimg").animate({bottom:maxHeight});
			  

	if (loop == true) {
		($.fn.bounce(maxHeight));
		loop = false;
	}
}



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
