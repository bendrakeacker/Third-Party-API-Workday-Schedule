//necessary time variables
var hrNow = "";
var inTime = "";

//set an array object to store scheduling events 
var schedArr = JSON.parse(localStorage.getItem("Schedule")) || [];

//function tracks current time and updates site display accordingly
function clock() {
        hrNow = moment().format('h');
        inTime = moment().format('dddd, MMMM Do YYYY');
        $("#today").text(inTime);
        
        var id = "09";
        var hrMil = moment().format('HH');
        for(var i = 9; i <= 17; i++ ) {
            var rowDiv = $("<div id=slot-"+i+">").addClass("row hour");
            var hrTxt = moment().hour(i).format('HH');
            var realTime = moment().hour(i).format('hA');
            var hrCol = $("<section>").addClass("col col-lg col-md col-sm").text(realTime);
            var txt = $("<textarea>").addClass("col-8 col-lg-8 col-md-8 col-sm-8 textarea");
            var btn = $("<button>").addClass("col col-lg col-md col-sm saveBtn").text("SAVE");
            
            hrCol.attr("id", id);
            rowDiv.append(hrCol,txt,btn);
            $(".container").append(rowDiv);
            // console.log(id);
            id++
           

            if((hrCol.attr("id")) == hrMil) {
                hrCol.addClass("now");
            } 
            else if(parseInt(hrCol.attr("id")) > hrMil) {
                hrCol.addClass("before");
            }
            else if(parseInt(hrCol.attr("id")) < hrMil) {
                hrCol.addClass("after");
            }
            saveSchedule();
            
        }
}
clock();

$(".saveBtn").on("click",function(){
    var txtArea = $(this).parent().children("textarea").val();
    var currentHr = $(this).parent().children("section").text();
    schedArr.push({msg: txtArea, hour: currentHr});
    localStorage.setItem("Schedule", JSON.stringify(schedArr));
});

function saveSchedule() {
    for(var i=0; i < schedArr.length; i++){
        var msg =schedArr[i].msg;
        var hour = schedArr[i].hour;

        $(".hour").each(function(){
            if($(this).children("section").text() === hour)
                $(this).children("textarea").text(msg);
        });
    }
}
