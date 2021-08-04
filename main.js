let clicked = 0;
        function play(){
            let playPause = document.getElementById("play-pause");
            
            if(clicked){
                playPause.className ="play";
                clicked = 0;
                audio.play();
            }else{
                playPause.className ="pause";
                clicked = 1;
                audio.pause();
            }
        }
        function volumeControl(){
            let volumeControl = document.getElementById("volume-controller");
            if(volumeControl.style.display == 'none'){
                volumeControl.style.display ='block';
            }else{
                volumeControl.style.display ='none';
            }
        }