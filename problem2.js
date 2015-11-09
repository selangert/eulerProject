var sum = 0; 
var i = 1;
var hold = 2;
var value = 0;

while(i < 400000000)
{
    if (i % 2 === 0) 
	{
		sum += i;
	}
	value = i + hold;
    hold = value;
	i = hold;
	
}
console.log(sum);



	

		