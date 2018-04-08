var number1 = parseInt(prompt("give me a number"));
var number2 = parseInt(prompt("give me a nother number"));
var number3 = parseInt(prompt("give me a number again"));

var arr=[ number1, number2, number3];

var sum=0;

for (i=0; i<3;i++){

	sum = sum + arr[i];
}

document.write (sum);