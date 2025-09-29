function updateClock() {

    let mainLeft1 = document.querySelector("#main-left1 h3");
      if (mainLeft1){
    let firstTime = moment().tz("Asia/Tehran").format("hh:mm:ss [<small>]A[</small>]");
     mainLeft1.innerHTML = firstTime;
}
    let mainLeft2=document.querySelector("#main-left2 h3")
    if (mainLeft2){
    let secondTime=moment().tz("Africa/Cairo").format("hh:mm:ss [<small>]A[</small>]")
    mainLeft2.innerHTML=secondTime
}
    let mainLeft3=document.querySelector("#main-left3 h3")
    if (mainLeft3){
    let thirdTime=moment().tz("Europe/Zurich").format("hh:mm:ss [<small>]A[</small>]")
     mainLeft3.innerHTML=thirdTime
}
};
updateClock();
window.clockInterval=setInterval(updateClock, 1000);

function updateDate(){
    let mainRight1=document.querySelector("#main-right1 span")
    let firstDate=moment().tz("Asia/Tehran").format("dddd, MMMM Do YYYY")
    if (mainRight1)mainRight1.innerHTML=firstDate
   
    let mainRight2=document.querySelector("#main-right2 span")
    let secondDate=moment().tz("Africa/Cairo").format("dddd, MMMM Do YYYY")
     if (mainRight2)mainRight2.innerHTML=secondDate
    
    let mainRight3=document.querySelector("#main-right3 span")
    let thirdDate=moment().tz("Europe/Zurich").format("dddd, MMMM Do YYYY")
    if (mainRight3)mainRight3.innerHTML=thirdDate

};
updateDate();


function selectCity(event){
    event.preventDefault()
    let selectTarget=event.target.value;
    let mainElementCall=document.querySelector("main")
        if(selectTarget=="current"){
        selectTarget=moment.tz.guess()
    }
    let momentLibrary=moment().tz(selectTarget);
    let selectedOption = event.target.options[event.target.selectedIndex];
    let cityName = selectedOption.textContent;
   
   if(selectedOption.value == "current") {
        cityName = selectTarget.split("/")[1];
    }

    mainElementCall.innerHTML=`
    <div class="forth-contry">
        <div class="main-right" id="main-right4">
            <h4>${cityName} </h4>
            <span>${momentLibrary.format("dddd, MMMM Do YYYY")}</span>
        </div>
        <div class="main-left" id="main-left4">
            <h3> ${momentLibrary.format("hh:mm:ss [<small>]A[</small>]")}</h3>
        </div>
    </div>
    <a href="#" onclick="window.location.reload()">Back to all cities</a>
`
console.log(window.location)
if (window.clockInterval) {
  clearInterval(window.clockInterval);
}
    
if (window.cityInterval) {
        clearInterval(window.cityInterval);
    }
    
window.cityInterval = setInterval(() => {
        let updatedTime = moment().tz(selectTarget).format("hh:mm:ss")+"<small>" + moment().tz(selectTarget).format("A") + "</small>";
        let mainLeft4 = document.querySelector("#main-left4 h3");
        if (mainLeft4) {
            mainLeft4.innerHTML = updatedTime;
        }
    }, 1000);
};
    
let selectElementChanged=document.querySelector("#select")
selectElementChanged.addEventListener("change",selectCity);
