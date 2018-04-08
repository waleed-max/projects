
$(document).ready(function(){

	$('#submit').click(function(){

		var term = $("#city").val();

		if(city != '') {
			$.ajax({


         url:'https://api.yelp.com/v3/businesses/search?term='+ city +'&location=boulder?access_token=qz4Bp6SJMTyIDGpAgdivlAhE2sewqd8GP1cPmogU1TL3lLokcUyLXeXMkDFRdvZfm35vt_JIkPTpQV1KopClLzF7-O1cUJTPGBY0Rc4AXCk3Qd1G9XwEyiaKz1rxWXYx',
         type:"GET",
         dataType:"jsonp",
         success: function(data){
          

          var widget = show(data);
          $("#End").html(widget);
         	$("#city").val("");

         	//data.weather.description
         }

			});
			
		} else {
			$("#error").html('Field cannot be empty')
			$("#error").val("");
		}
		
	});
});


function show(data){

	return "<div class='alert alert-info'>Here is the forecast for:"+ data.term + "</div>";
	
          
};

