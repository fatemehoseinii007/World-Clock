function updateClock() {
    let mainLeft = document.querySelector("#main-left1 h3");
    let firstTime = moment().tz("Asia/Tehran").format("hh:mm:ss [<small>]A[</small>]");
    mainLeft.innerHTML = firstTime;

    let mainLeft2=document.querySelector("#main-left2 h3")
    let secondTime=moment().tz("Africa/Cairo").format("hh:mm:ss [<small>]A[</small>]")
    mainLeft2.innerHTML=secondTime

    let mainLeft3=document.querySelector("#main-left3 h3")
    let thirdTime=moment().tz("Europe/Zurich").format("hh:mm:ss [<small>]A[</small>]")
    mainLeft3.innerHTML=thirdTime

}
updateClock();
setInterval(updateClock, 1000);