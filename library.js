
$.fn.colorChanger = function(changeColor) {
    this.css( "color", changeColor );
}

var bouncer =$.fn.bounce = function(maxHeight){



		$("#bounceimg").animate({bottom:"0px"})
			  		   .css("position", "relative");			
		$("#bounceimg").animate({bottom:maxHeight});
			  
		 		//setInterval(($.fn.bounce(maxHeight)));
		 		    setInterval(bouncer(maxHeight));


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
