//multiples of 5 print Foo, multiples of 7 print Bar, and multiples of both print FooBar.for numbers 1 to 200
for (let i = 1; i <= 200; i++) 
{
    if (i % 5 === 0 && i % 7 === 0) 
    {
        console.log("FooBar");
    } 
    else if (i % 5 === 0) 
    {
        console.log("Foo");
    } 
    else if (i % 7 === 0) 
    {
        console.log("Bar");
    } else 
    {
        console.log(i);
    }
}