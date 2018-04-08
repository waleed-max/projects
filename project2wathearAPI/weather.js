

$(document).ready(function(){

	$('#submit').click(function(){

		var city = $("#city").val();

		if(city != '') {
			$.ajax({

         url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=ef438f0c8d7875e96032bc3d8242fa32",
         type:"GET",
         dataType:"jsonp",
         success: function(data){
       
          var widget = show(data);
          $("#End").html(widget);
         	$("#city").val("");
         	
         }

			});
			
		} else {
			$("#error").html('Field cannot be empty')
			$("#error").val("");
		}
		
	});
});


function show(data){

	return "<div class='alert alert-info'>Here is the forecast for:"+ data.name + "</div>"+ 
	"<div class='alert alert-info'>Current Outlook:" + data.weather[0].description +"</div>"+
           "<div class='alert alert-success'>Temperature:" + data.main.temp+ "</div>"+
           "<div class='alert alert-danger'>Humidity:" + data.main.humidity+"%"+ "</div>";
        
          
};


