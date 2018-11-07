var noon = 12;
var evening = 18; 
var wakeUpTime = 9;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;
var time = new Date().getHours();
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var updateClock = function(){
 
     var lolcat = document.getElementById('lolcat');
     var message = document.getElementById('timeEvent');
     var messageText;
     var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
 
     if (time == partyTime){
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
          messageText = "IZ PARTEE TIME!!";
     } else if (time == napTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
          messageText = "IZ NAP TIME...";
     } else if (time == lunchTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
          messageText = "IZ NOM NOM NOM TIME!!";
     } else if (time == wakeUpTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
          messageText = "IZ TIME TO GETTUP.";
     } else if (time < noon) {
          messageText = "Good morning!";
     } else if (time > evening) {
          messageText = "Good Evening!";
     }else {
          messageText = "Good afternoon!";
     }
 
     message.innerText = messageText;
     lolcat.src = image;
 
     showCurrentTime();
 
};
 
var showCurrentTime = function() {
     var clock = document.getElementById('clock');
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";
 
     if (hours >= noon){
          meridian = "PM";
     }
 
     if (hours > noon){
          hours = hours - 12;
     }
 
     if (minutes < 10){
          minutes = "0" + minutes;
     }
 
     if (seconds < 10){
          seconds = "0" + seconds;
     }
 
     var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
     clock.innerText = clockTime;
};
 
updateClock();
 
var oneSecond = 1000;
 
setInterval( updateClock, oneSecond);

var partyEvent = function () {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
document.getElementById("partyTimeButton").innerText = "Party Over";		partyTimeButton.style.backgroundColor ="#0A8DAB";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
	partyTimeButton.style.backgroundColor = "#222";	document.getElementById("partyTimeButton").innerText = "Party Time!";
		
	}
};
var wakeUpEvent = function () {
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function () {
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function () {
	napTime = napTimeSelector.value;
};
partyTimeButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

lunchTimeSelector.addEventListener("change", lunchEvent);

napTimeSelector.addEventListener("change", napEvent);
