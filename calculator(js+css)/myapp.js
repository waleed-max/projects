
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;






for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		console.log(inputVal);
		
		

		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}

		else if(btnVal == '^2') {
			input.innerHTML = inputVal * inputVal;
			decimalAdded = false;
		}

		else if(btnVal == '^3') {
			input.innerHTML = inputVal * inputVal * inputVal;
			decimalAdded = false;
		}

		else if(btnVal == 'cos') {
			input.innerHTML = Math.cos(inputVal);
			decimalAdded = false;
		}


		else if(btnVal == 'sin') {
			input.innerHTML = Math.sin(inputVal);
			decimalAdded = false;
		}

		else if(btnVal == 'log') {
			input.innerHTML = Math.log(inputVal);
			decimalAdded = false;
		}

		else if(btnVal == 'tan') {
			input.innerHTML = Math.tan(inputVal);
			decimalAdded = false;
		}

		else if(btnVal == 'e') {
			input.innerHTML = Math.exp(inputVal);
			decimalAdded = false;
		}




		
		
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			
              

		
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
		
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		
		else if(operators.indexOf(btnVal) > -1) {
			
			var lastChar = inputVal[inputVal.length - 1];
			
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;

						
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

		else if(btnVal == 'btnVal+aqrt') {
			if(!decimalAdded) {
				input.innerHTML += btnVal*btnVal;
				decimalAdded = true;
			}
		}
		
		else {
			input.innerHTML += btnVal;
		}
		
		
		e.preventDefault();
		
		
	
	} 
}