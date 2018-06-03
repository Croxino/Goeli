$(function(selector){

var self = {};
self.selector = selector;
//self.element = document.querySelector(self.selector);

function inputFields(){
		var textBox =  $.trim( $('input[type=text]').val() )

		if (textBox.val().length == 0) {
			alert("asdasd");
		}
	}

function bounce(bounced){
		$(bounced).animate({bottom:"50px"})
			  	  .animate({top:"0px"})
			  	  .css("position", "relative");
}

function colorChanger(changeColor) {
    this.css( "color", changeColor );
}



});


	





