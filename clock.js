function displayTime(){
    var date = new Date();
    var hrs = date.getHours(); 
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    var meridian = "AM";
    
	
    if(hrs == 0){
        hrs = 12;
    }
    
	//12 hr clock format
    if(hrs > 12){
        hrs = hrs - 12;
        meridian = "PM";
    }
    
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var time = hrs + ":" + mins + ":" + seconds + " " + meridian;
    document.getElementById("showClock").innerText = time;
    setTimeout(displayTime, 1000);
}

displayTime();