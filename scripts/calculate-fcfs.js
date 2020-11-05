function calculateFCFS(){
    var nos = document.getElementById("no-of-processes").value;
    var arrivalTime = document.getElementById("arrival-time").value;
    var burstTime = document.getElementById("burst-time").value;
    
    var arrivalTimeStrArr = arrivalTime.split(",");
    var burstTimeStrArr = burstTime.split(",");
    var intNos = parseInt(nos);
    var intAT = new Array(intNos);
    var intBT = new Array(intNos);

    //Converting string array to int array
    var i = 0;
    for(var num of arrivalTimeStrArr){
        intAT[i] = parseInt(num);
        ++i;
    }
    //Converting string array to int array
    i = 0;
    for(var num of burstTimeStrArr){
        intBT[i] = parseInt(num);
        ++i;
    }
	sortArrivalTime(intAT, intBT);
    fcfsAlgorithm(intAT, intBT);

    function displayArr(arr) {
        //var i ;
        try{
            for(i = 0 ; i < arr.length; ++i)
            {
                document.write("<br> => " +arr[i]);
            }
        }catch(err){document.getElementById("tableRowId").innerHTML=err.message;}
    }

    function sortArrivalTime(at, bt) {
        var b,t;
        try{
            for(var i = 0; i < at.length;i++){
                for(var j=i+1;j<at.length;j++)
                    if(at[i]>at[j])
                    {
                        t=at[i];
                        b=bt[i];
                        at[i]=at[j];
                        bt[i]=bt[j];
                        at[j]=t;
                        bt[j]=b;
                    }
            }
        }catch(err){document.getElementById("tableRowId").innerHTML=err.message;}
    }
    
    function fcfsAlgorithm(at,bt){
        var time = 0;
        var i = 0;
		var cnt=0;
		var nos=at.length;
        //----Array Declaration---
        var st = new Array(nos);
        var wt = new Array(nos);
        var ft = new Array(nos);
        var tat = new Array(nos);
		var currenttime=0;
        //------------------------
        try{
            var totalTAT = 0.0;
            var totalWT = 0.0;
            var ganttChart = "";
            var i=0;
            while(true){ 
                if(currenttime<at[i])
                {
                    ganttChart+=currenttime+" idle ";
                    currenttime=at[i];
                    ganttChart+=currenttime+" | ";
                }
                else
                {
                    ganttChart+=currenttime;
                    st[i] = currenttime;
                    wt[i] = currenttime-at[i];
                    currenttime=currenttime+bt[i];
                    tat[i]=wt[i]+bt[i];
                    ganttChart+=" P"+i+" "+currenttime+" |";
                    totalTAT+=tat[i];
                    totalWT+=wt[i];
                    ft[i]=currenttime;
                    i++;
                    cnt++;
                    if(cnt==nos){ break};
                }
            }
            var a,tableData;
            var res="";
            for(i=0;i<at.length;i++)
            {
                 tableData = "<tr>"+
                            "<td>"+"p"+[i]+"</td>"+
                            "<td>"+at[i]+"</td>"+
                            "<td>"+bt[i]+"</td>"+
                            "<td>"+st[i]+"</td>"+
                            "<td>"+ft[i]+"</td>"+
                            "<td>"+wt[i]+"</td>"+
                            "<td>"+tat[i]+"</td>"+
                        "</tr>";
                res = res.concat(tableData);
             }
            document.querySelector('#tableRowId').innerHTML= res; 
            
            var timeData = "<table><tr>"+
                        "<td><b>Result:</b></td>"+
                            "</tr>"+
                        "<tr>"+
                            "<td><b>Total Waiting Time</b></td>"+
                            "<td>"+totalWT+"</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td><b>Total Turn Around Time</b></td>"+
                            "<td>"+totalTAT+"</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td><b>Average Waiting Time</b></td>"+
                            "<td>"+(totalWT/nos)+"</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td><b>Average Turn Around Time</b></td>"+
                            "<td>"+(totalTAT/nos)+"</td>"+
                        "</tr></table>";
                //document.getElementById("tableRowId").append(tableData)
                document.querySelector('#output1').innerHTML=timeData;

                var ganttChartData = 
                                    "<table><tr>"+
                                    "<td><b> Gantt Chart </b></td>"+
                                    "</tr>"+
                                    "<tr>"+
                                        "<td>"+ganttChart+"</td>"+
                                    "</tr></table>";
               document.querySelector('#output2').innerHTML=ganttChart;
        }catch(err){document.getElementById("tableRowId").innerHTML=err.message;}
    }
   // output = xmlhttp1.responseText;
    
   //var tablel = document.getElementById("tableRowId");
   document.getElementById("process-division").style.display = "block";      
}