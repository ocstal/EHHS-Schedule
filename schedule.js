`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const date = new Date();
  const color = "lightBlue";
  const periodList = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
  timeDisplay.textContent = date.toLocaleTimeString("en-US");
  for (let i = 0; i < periodList.length; i++) {
      document.getElementById(periodList[i]).style['background'] = "white";
  }
  if (((date.getHours()*60) + date.getMinutes()) >= 825) {
    document.getElementById(periodList[8]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 780) {
    document.getElementById(periodList[7]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 735) {
    document.getElementById(periodList[6]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 690) {
    document.getElementById(periodList[5]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 645) {
    document.getElementById(periodList[4]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 600) {
    document.getElementById(periodList[3]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 555) {
    document.getElementById(periodList[2]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 510) {
    document.getElementById(periodList[1]).style['background'] = color;
  } else if (((date.getHours()*60) + date.getMinutes()) >= 460) {
    document.getElementById(periodList[0]).style['background'] = color;
  }



}
  setInterval(refreshTime, 1000);