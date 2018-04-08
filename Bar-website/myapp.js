
var keys = document.querySelectorAll('.wal button,#mainbar button');
var operators = ['+', '-'];
var total=0;
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		
		var input = document.querySelector('.screen');
		var inputx = document.querySelector('.screen2');
		var inputVal = inputx.innerHTML;
		var btnVal = this.innerHTML;
		
for (var c=0; c < total.length; c++) {
     
	total[c]+=  inputVal;

}
		if(btnVal == 'C') {

			input.innerHTML = '';
			inputx.innerHTML = '';
		}
		
		else if(btnVal == 'BEER 1') {
			
			input.innerHTML += 'BEER1'+ '<br>';
			inputx.innerHTML += 7 + '<br>';
			total+= 7;
			/*total+=inputx.innerHTML;*/
		}

		else if(btnVal == 'BEER 2') {
			
			input.innerHTML += 'BEER2' + '<br>';
			inputx.innerHTML += 6+'<br>';
			total+=6;
			/*total+=inputx.innerHTML;*/
		}


		else if(btnVal == 'BEER 3') {
			
			input.innerHTML += 'BEER3' + '<br>';
			inputx.innerHTML +=5 + '<br>';
			total+=5;
			/*total+=inputx.innerHTML;*/
		}


		else if(btnVal == 'BEER 4') {
			
			input.innerHTML += 'BEER4' + '<br>';
			inputx.innerHTML +=9 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}

		else if(btnVal == 'BEER 5') {
			
			input.innerHTML += 'BEER5' + '<br>';
			inputx.innerHTML +=8 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}
		else if(btnVal == 'BEER 6') {
			
			input.innerHTML += 'BEER6' + '<br>';
			inputx.innerHTML +=10.5 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}
		else if(btnVal == 'BEER 7') {
			
			input.innerHTML += 'BEER7' + '<br>';
			inputx.innerHTML +=12 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}

		else if(btnVal == 'BEER 8') {
			
			input.innerHTML += 'BEER8' + '<br>';
			inputx.innerHTML +=3 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}

		else if(btnVal == 'BEER 9') {
			
			input.innerHTML += 'BEER9' + '<br>';
			inputx.innerHTML +=13 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}
		else if(btnVal == 'BEER 10') {
			
			input.innerHTML += 'BEER10' + '<br>';
			inputx.innerHTML +=4 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}

		else if(btnVal == 'BEER 11') {
			
			input.innerHTML += 'BEER11' + '<br>';
			inputx.innerHTML +=5 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}
		else if(btnVal == 'BEER 12') {
			
			input.innerHTML += 'BEER12' + '<br>';
			inputx.innerHTML +=8 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}
		else if(btnVal == 'BEER 13') {
			
			input.innerHTML += 'BEER13' + '<br>';
			inputx.innerHTML +=4 + '<br>';
			total+=9;
			/*total+=inputx.innerHTML;*/
		}
				
		
		else if(btnVal == 'Total') {
			var equation = inputVal;
			              
			inputx.innerHTML = total +' ' + ' ' +"$";
            
				
			
		}

		else if(btnVal == 'user1') {
        		
			   /*waiting the Node.js*/          
			}
				
		else if(operators.indexOf(btnVal) > -1) {
			
									
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				
				inputx.innerHTML = inputVal + inputVal;
			}
			
			
		}
		
	
	
		e.preventDefault();
		
	} 
}

