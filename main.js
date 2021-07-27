
var num = 1;
var now = num;
function level(direct){
    if(direct==1){
        if(num == 5) return;
        num++;
    } else{
        if(num ==1) return;
        num--;
    }
    var next = num;

    if()


}



function play() {
    audio.play();
}
function pause() {
    audio.pause();
}
function volumeControl(){
    var volumeControl1 = document.getElementById("volume-control-1");
    if(volumeControl1.style.display == 'none'){
        volumeControl1.style.display ='block';
    }else{
        volumeControl1.style.display ='none';
    }
}


