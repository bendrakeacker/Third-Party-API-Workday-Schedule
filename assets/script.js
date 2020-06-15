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

        if(hrBlock.length == 4) {
            blockAMPM = hrBlock[2]+hrNowBlockAMPM[3];
            hrNowBlock = hrNowBlock[1];
        }
        else {
            blockAMPM = hrBlock[4] + hrNowBlockAMPM[5];
            hrNowBlock = hrNowBlock[0] + hrNowBlock[1];
        }
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

        console.log(hrNowBlock);
        console.log(hrBlock);
    })
}


$(".saveBtn").on("click",function(){

});

function schedule() {

}

$(".resetBtn").on("click",function(){

});