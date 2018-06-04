'use strict';

$(function(){

	var width = 720;
	var animationSpeed = 1000;
	var pause = 1000;
	var currentSlide = 1;

	//cache DOM
	var $slider = $("#slider");
	var $slideContainer = $slider.find(".slides");
	var $slides = $slideContainer.find(".slide");

	var interval;

	function startSlider(){
		interval = setInterval(function(){
		$slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function(){
			currentSlide++;
			if (currentSlide === $slides.length) {
				currentSlide=1;
				$slideContainer.css("margin-left", 0);
			}
		});
	},pause);
	}

	function pauseSlider(){
		clearInterval(interval);
	}

	$slider.on("mouseenter", pauseSlider).on("mouseleave", startSlider);

	startSlider();
});
var goeli = true;
var maxHeight = maxHeight;
$.fn.colorChanger = function(changeColor) {
    this.css( "color", changeColor );
}

$.fn.bounce = function(hhh, maxHeight){


		$(hhh).animate({bottom:"0px"})
			  .css("position", "relative");			
		$(hhh).animate({bottom:maxHeight});
			   setTimeout(function() {$(hhh).animate({bottom:"0px"})}, 500);


	if (goeli == true) {
		setInterval($.fn.bounce(hhh, maxHeight), 2000);
		goeli = false;


	}

	console.log(maxHeight);
}

// $.fn.jump = function(maxHeight){
// 			  this.animate({bottom:maxHeight})
// 			  	  .animate({top:"0px"})
// 			  	  .css("position", "relative");

// 		if (goeli == true) {
// 		setInterval($.fn.bounce, 2000);
// 		goeli = false;
// 	}
// }



$.fn.inputFields = function(){

	$("button").click(function(){
			var textBox =  $.trim( $('input[type=text]').val() )
		if(textBox == "")
		{
			alert("dasdsa");
		}
	})



	//check input field for value
	//only check when submit is hit
	//show warning

}




// $(function(){

// 	function inputFields(){
// 		var textBox =  $.trim( $('input[type=text]').val() )

// 		if (textBox.val().length == 0) {
// 			alert("asdasd");
// 		}

// 	}
// });

// $.fn.inputFields = function(){

// 	 var textBox =  $.trim( $('input[type=text]').val() )

// 	 if (textBox.length > 0) {
// 	 	alert("dasd");
// 	 }else {
// 	 		$("#warning").css({display:"block"});
// 	 }
// }


	 	// if(textBox == "")
	 	// {
	 	// $("#warning").css({display:"block"});

	 	// }


	 



// $('#btnSubmit').click(function() { 
//      $("#error").hide();    
//      $('input:text').each(function(){
//        if( $(this).val().length == 0)
//           $("#error").show('slow');
//     });
// });

 	

	// var value = $("#namefield").val();

	// 	if (value == "") {
	// 		$("#warning").html(error)
	// 					 .css({color:"red"});
	// 	}
	// 	else {
	// 		$("#warning").html(default);
	// 	}

	// 	console.log(value);






// $.fn.bounce = function(bounced){

// let i = 1;
	
// 	while(i<20){
// 		$(bounced).animate({bottom:"50px"})
// 			.animate({top:"0px"})
// 			.css("position", "relative");
// 			i++;
// 	}

// 	console.log(i);
		
	
//}


// $.fn.bounce = function(bounced)
// {
// 	var botPosition = 50;
// 	var topPosition = 0;
// 	var time = 1;

	
			  	

// 	var interval = setInterval(function(){
			
// if (time <= 3) {

// 				$(bounced).animate({bottom:"50px"})
// 			  	  .animate({top:"0px"})
// 			  	  .css("position", "relative");	
// 			  	  time++
  	  
// 			  	}
// 			  	else {
// 			  		clearInterval(interval);
// 			  	}
// 	})

// 	console.log(time);
//  }

 // var bouncing = (function($)
 // {
 // 		var maxPosition = 50;
	// 	var positionX = 0;

	// 	$.fn.bounce = function(bounced)
	// 	{
	// 			if (positionX < maxPosition) 
	// 			{

	// 			$(bounced).animate({bottom:"50px"})
	// 		  	  .animate({top:"0px"})
	// 		  	  .css("position", "relative");
	// 		  	}


	// 		}

 // }


 

// $(document).ready(function bounce(bounced){
// 		$(bounced).css({bottom:"0px"})
// 		.css("position", "relative");
// 			  	  .css({top:"0px"})
// 			  	  .animate({bottom: '+=50px'}, 500, 'linear',function(){
// 			  	  	bounce();
// 			  	  });
// 			  	  bounce();
			  	  
// });

// $(document).ready(function(){

// 	function bounce(bounced)
// 	{
// 		$(bounced).animate({bottom:"50px"})
// 			  	  .animate({top:"0px"})
// 			  	  .css("position", "relative");
// 	}
// 	bounce();
// });


//setInterval(bounce, 2000);