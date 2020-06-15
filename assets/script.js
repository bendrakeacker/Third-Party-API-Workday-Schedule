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
clock();

function determineTime() {
    $(".hour").each(function() {

        var hrNowBlock = hrNow;
        var hrBlock = $(this).children("section").html();
        var blockAMPM = "";
        var hrNowBlockAMPM = "";
//if the hour has a string of 4 (for blockAMPM)
        if(hrBlock.length == 4) {
            blockAMPM = hrBlock[2]+hrNowBlockAMPM[3];
            hrNowBlock = hrNowBlock[1];
        }
//if the string doesnt have 4 characters it must 5
        else {
            blockAMPM = hrBlock[3] + hrNowBlockAMPM[4];
            hrNowBlock = hrNowBlock[1] + hrNowBlock[2];
        }
// same conditional for hrNowBlockAMPM
        if(hrNowBlock.length == 4) {
            hrNowBlockAMPM = hrNowBlock[2] + hrNowBlock[3];
            hrNowBlock = hrNowBlock[1];
        }
        else {
            hrNowBlockAMPM = hrNowBlock[3] + hrNowBlock[4];
            hrNowBlock = hrNowBlock[1] + hrNowBlock[2];
        }

        hrNowBlock = parseInt(hrNowBlock);
        hrBlock = parseInt(hrBlock);

        if($(this).children("section").html() == (hrNowBlock + hrBlock)) {
            $(this).children("textarea").addClass("now");
        }

        if(hrBlock < hrNowBlock && hrBlock !== 12 && blockAMPM == hrNowBlockAMPM) {
            $(this).children("textarea").addClass("before");
        }

        else if(hrBlock == 12 && hrNowBlock >= 1 && hrNowBlockAMPM == "PM" && hrNow !== 12){
            $(this).children("textarea").addClass("before");
        }
        else if(hrBlock == 12 && hrNowBlock >=1 && blockAMPM == "AM" && hrNowBlockAMPM == "AM") {
            $(this).children("textarea").addClass("before");
        }
        if(blockAMPM == "AM" && hrNowBlockAMPM == "PM"){
            $(this).children("textarea").addClass("before");
        }
    })
}


$(".saveBtn").on("click",function(){

});

function schedule() {

}
