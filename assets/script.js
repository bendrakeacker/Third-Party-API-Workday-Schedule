//necessary time variables
var hrNow = "";
var inTime = "";

//set an array object to store scheduling events 
var schedArr = JSON.parse(localStorage.getItem("Schedule")) || [];

//function tracks current time and updates site display accordingly
function clock() {
    timer = setInterval(function(){
        hrNow = moment().format('hA');
        inTime = moment().format('dddd, MMMM Do YYYY');
        $("#today").text(inTime);
        determineTime();


    })
}

function determineTime() {
    

}


$(".saveBtn").on("click",function(){

});

function schedule() {

}

$(".resetBtn").on("click",function(){

});