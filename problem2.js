var sum = 0; 
var i = 1;
var hold = 1;
var value = 0;

while(i < 400000000)
{
    if (i % 2 === 0) 
	{
		sum += i;
	}
	value = i + hold;
    hold = i;
	i = value;
	
}
console.log(sum);



	

		