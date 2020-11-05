function noOfProcessValidation(){
    var nos = document.getElementById("no-of-processes").value;
    var msg = "";
    var testInput = /^[A-Za-z]+$/;
    if(parseInt(nos) < 0){
        msg = "Number cannot be negative.";
    } else if(testInput.test(nos)){
        msg = "No. of processes cannot contains alphanumeric characters."
    }
    
    if(msg != ""){
        alert(msg);
        document.getElementById("no-of-processes").value = "";
    }
}
function qnoValidation(){
    var qno = document.getElementById('q-no');
    if(qno=="")
    {
        alert("Please enter valid Quantum Time");
    }
}
function arrivalProcessValidation(){
    var arrivalTime = document.getElementById("arrival-time").value;
    var nos = document.getElementById("no-of-processes").value;
    var msg = "";
    var testInput = /^[A-Za-z]+$/;

    var numOfAT = arrivalTime.split(",");
    if(numOfAT.length != nos){
        msg = "Please enter valid number of arrival time.";
    }

    if(testInput.test(arrivalTime)){
        msg = "Please enter valid arrival time.";
    }
    
    if(msg != ""){
        alert(msg);
        document.getElementById("arrival-time").value = "";
    }
}


function burstTimeValidation(){
    var burstTime = document.getElementById("burst-time").value;
    var nos = document.getElementById("no-of-processes").value;
    var msg = "";
    var testInput = /^[A-Za-z]+$/;

    var numOfBT = burstTime.split(",");
    if(numOfBT.length != nos){
        msg = "Please enter valid number of burst time.";
    }

    if(testInput.test(burstTime)){
        msg = "Please enter valid burst time.";
    }
    if(msg != ""){
        alert(msg);
        document.getElementById("burst-time").value = "";
    }
    document.getElementById("calculateButton").disabled = false;   
}

function priorityBurstTimeValidation(){
    var burstTime = document.getElementById("burst-time").value;
    var nos = document.getElementById("no-of-processes").value;
    var msg = "";
    var testInput = /^[A-Za-z]+$/;

    var numOfBT = burstTime.split(",");
    if(numOfBT.length != nos){
        msg = "Please enter valid number of burst time.";
    }

    if(testInput.test(burstTime)){
        msg = "Please enter valid burst time.";
    }
    if(msg != ""){
        alert(msg);
        document.getElementById("burst-time").value = "";
    }
}


function priorityValidation(){
    var priority = document.getElementById("priority").value;
    var nos = document.getElementById("no-of-processes").value;
    var msg = "";
    var testInput = /^[A-Za-z]+$/;

    var numOfPRIO = priority.split(",");
    if(numOfPRIO.length != nos){
        msg = "Please enter valid number of priority.";
    }

    if(testInput.test(priority)){
        msg = "Please enter valid priority.";
    }
    if(msg != ""){
        alert(msg);
        document.getElementById("priority").value = "";
    }    
    document.getElementById("calculateButton").disabled = false;
}
