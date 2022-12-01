`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const timeLeftDisplay = document.getElementById("timeLeft");
  const date = new Date();
  const color = "lightBlue";
  let nextPeriodStart;
  const periodList = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
  timeDisplay.textContent = date.toLocaleTimeString("en-US");

  //set bg color of all periods to white
  for (let i = 0; i < periodList.length; i++) {
      document.getElementById(periodList[i]).style['background'] = "white";
  } // end for
  
  // change the background color of whatever period it is
  if (date.getHours()*60 + date.getMinutes() >= 870) {
    nextPeriodStart = 460;
    document.getElementById(periodList[8]).style['background'] = "white";
  }
  else if (date.getHours()*60 + date.getMinutes() >= 825) {
    nextPeriodStart = 870;
    document.getElementById(periodList[8]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 780) {
    nextPeriodStart = 825;
    document.getElementById(periodList[7]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 735) {
    nextPeriodStart = 780;
    document.getElementById(periodList[6]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 690) {
    nextPeriodStart = 735;
    document.getElementById(periodList[5]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 645) {
    nextPeriodStart = 690;
    document.getElementById(periodList[4]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 600) {
    nextPeriodStart = 645;
    document.getElementById(periodList[3]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 555) {
    nextPeriodStart = 600;
    document.getElementById(periodList[2]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 510) {
    nextPeriodStart = 555;
    document.getElementById(periodList[1]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 460) {
    nextPeriodStart = 510;
    document.getElementById(periodList[0]).style['background'] = color;
  } // end if chain

  // set the time left element to show the minutes left
  if ((date.getHours()*60 + date.getMinutes()) >= 870) {
    nextPeriodStart = 460;
    if (((date.getHours()*60 + date.getMinutes()) - nextPeriodStart) >= 60) {
      timeLeftDisplay.textContent = Math.floor((1440-(date.getHours()*60 + date.getMinutes()) + nextPeriodStart)/60)+" Hours Until School Starts"
    } else {
      timeLeftDisplay.textContent = nextPeriodStart - date.getHours()*60+date.getMinutes() + " Minutes Until School Starts"
    }
  } else if ((date.getHours()*60 + date.getMinutes()) < 460){
    nextPeriodStart = 460;
    timeLeftDisplay.textContent = ((date.getHours()*60 + date.getMinutes()) - nextPeriodStart)+" Minutes"
  } else {
    timeLeftDisplay.textContent = nextPeriodStart - (date.getHours()*60 + date.getMinutes())+" Minutes";
  } 

} // end refreshTime()

//update once per second (1000ms)
setInterval(refreshTime, 1000);