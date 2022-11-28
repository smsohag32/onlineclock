setInterval(
    function(){
        const time = document.querySelector('#time');
        let date = new Date();
        let hours = date.getHours();        
        let minutes = date.getMinutes();        
        let seconds = date.getSeconds(); 
        let day_night = "AM"
        if(hours > 12){
            hours = hours - 12;
            day_night = "PM"
        }
        if( minutes < 10){
            minutes = "0" + minutes;
        }
        time.textContent = hours + ':' + minutes + ':' + seconds + '  ' + day_night;
    }
)

 let al = alert("You are show Just Time");