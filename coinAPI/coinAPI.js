

$(document).ready(function(){

	$('#submit').click(function(){
		
			$.ajax({

         url:'https://api.coindesk.com/v1/bpi/currentprice.json',
         type:"GET",
         code :"EUR",
       
     
			}).done(function(result){
				
				var parsed = JSON.parse(result);
				if($("input:checked").val() == "USD"){
					$('#showHere').html("Current price of bitcoin is " + parsed.bpi.USD.rate)
				}else if ($("input:checked").val() == "EUR"){
                   $('#showHere').html("Current price of bitcoin is " + parsed.bpi.EUR.rate)

				}else if ($("input:checked").val() == "GBP"){
				$('#showHere').html("Current price of bitcoin is " + parsed.bpi.GBP.rate)
				}
			})
			
		
		
	});
});





