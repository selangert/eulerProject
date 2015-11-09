var value = prompt("Give me a number:");
var sum = 0;
for (var i = 0; i < value; i++) 
{
	if (i % 3 === 0 || i % 5 === 0) 
	{
		sum += i;
	}
}
console.log(sum);