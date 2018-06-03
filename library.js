	// function $(selector)
	// {
	// 	var self={};
	// 	self.selector = selector
	// 	self.element = document.querySelector(self.selector);

	// 	self.html = function()
	// 		{
	// 		return self.element;
	// 		}

	// 	self.attr = function(name,value)
	// 		{
	// 			if(!value) return self.element.getAttribute(name)
	// 				self.element.setAttribute(name, value);
	// 			return self;
	// 		}
	// 	self.on = function(type,callback)
	// 		{
	// 			self.element['on' + type] = callback;
	// 			return self;
	// 		}


	// 	return self;
	// }

	function reveal()
	{
		var x = document.getElementById('itworks');
		if (x.style.display === 'none') 
		{
			x.style.display ='block';
		}
		else 
		{
		x.style.display = 'none';	
		}

	}
	
	function slideshow()
	{

	}



	function timer()
	{

		function converter(s)
		{
			var minutes = Math.floor(s/60);
			var seconds = s % 60;
			return minutes + ':' + seconds;

		}

		var counter = 55;
		var y = document.getElementById('timer');
		y.innerHTML = (converter(counter));

		function timeIt()
		{
			counter++;
			y.innerHTML = (converter(counter));
			
		}


		setInterval(timeIt,1000);
		
	}

	function rumble()
	{

		var r = document.getElementById("animate");
		var pos = 0;
		var id = setInterval(tremble, 5)

		function tremble()
		{
			if (pos = 5000) {
				clearInterval(id);
			}
			else {
				pos++;
				r.style.right = pos + 200;	
			}
			// setTimeout(function(){
			// 	rumble = false;
			// }, 3000);
		}

	}




