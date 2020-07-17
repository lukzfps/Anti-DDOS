var intervalId = false;
var autoloopinterval;
function autoClick() {
    var button = document.getElementById('main-form:j_idt134');
    if(button){
        console.log("button");
        //button.click();

    }

}


function timer(){
if(intervalId == false){
	autoloopinterval = window.setInterval(autoClick, 1000);
	intervalId = true;
}else{
	window.clearInterval(autoloopinterval);
	intervalId = false;
}
}
