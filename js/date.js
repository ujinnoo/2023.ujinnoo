function myFunction(){
    
    var today = new Date();

    var month = today.getMonth()+1;
    var day = today.getDate();

    var DAY = today.getDay();
        if (DAY == 0){
            DAY = "(일)";
        }
        else if(DAY == 1){
            DAY = "(월)";
        }
        else if(DAY == 2){
            DAY = "(화)";
        }
        else if(DAY == 3){
            DAY = "(수)";
        }
        else if(DAY == 4){
            DAY = "(목)";
        }
        else if(DAY == 5){
            DAY = "(금)";
        }
        else if(DAY == 6){
            DAY = "(토)";
        }
        else {
            DAY = "NO";	
        }

    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).substr(-2,2);

    var time = month + '월 ' + day + '일 ' + DAY+ ' ' + hours + ':' + minutes;

    var id_clock = document.getElementById("clock");
    id_clock.innerHTML = time;
}

setInterval(myFunction, 1000);