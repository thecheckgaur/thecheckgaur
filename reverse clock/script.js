var h1=document.getElementById("h1")
var h2=document.getElementById("h2")
var user= parseInt(prompt( "Enter Your Number"))
let targetTime = new Date(user,0)
if(user>=2023){

    const time=setInterval(() => {
        
        let currentTime = new Date()
        let diff = targetTime-currentTime
        var day = Math.floor(diff/(1000*60*60*24))
        var hour = Math.floor(diff%(1000*60*60*24)/(1000*60*60))
        var minute = Math.floor(diff%(1000*60*60)/(1000*60))
        var seconds = Math.floor(diff%(1000*60)/(1000))
        var miliseconds = (diff%(1000)/(1))
        
        
        h2.innerHTML= day+ ":" +hour+ ":" +minute+ ":" +seconds+ ":" +miliseconds
    }, 1);
}
else{
    alert("This Year is not Valid")
    
}
    