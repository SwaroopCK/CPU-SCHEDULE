function clearInputs(){
    document.getElementById("no-of-processes").value = "";
    document.getElementById("arrival-time").value = "";
    document.getElementById("burst-time").value = "";
    document.getElementById("calculateButton").disabled = true;
    document.getElementById("process-division").style.display = "none";
    document.getElementById("priority").value = "";
}