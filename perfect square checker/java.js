var num = parseInt(prompt("Enter Your Number"))
var n = parseInt(num**0.5)

if(n*n==num){
    document.write(`Yes, ${num} is a perfect square root`)
}
else{
    document.write(`No, ${num} is not a perfect square root`)
}