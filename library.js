
$.fn.colorChanger = function(changeColor) {
    this.css( "color", changeColor );
}

var bouncer =$.fn.bounce = function(maxHeight)
{


setInterval(function()
	{
	$("#bounceimg").animate({bottom:"0px"})
			  		   .css("position", "relative")			
		$("#bounceimg").animate({bottom:maxHeight});
	}, 500);
}



$.fn.jump = function(maxHeight, jumps){

	var jumps;

	for (i = 0; i < jumps; i++){
				this.animate({bottom:"0px"})
			  		.css("position", "relative")			
					.animate({bottom:maxHeight})
	}
	this.animate({bottom:"0px"});

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
