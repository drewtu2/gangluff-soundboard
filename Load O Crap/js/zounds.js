/* Such Scripts. Such Control
   Takes ID, plays sound
*/

function soundControl(){
	if(keynum == 32 || keynum == 27) //Space Bar will disable alert/sounds
	{
//								alert(play);
				toggle();
//								alert(play);
	}
// 							alert(play);

	//Display or nawh
	if(play){
		keySelect(keynum);
	}
	else
	{
		//alert("Currently Muted. Press <<Space Bar>> to unmute");
	}


}
    
//Plays sounds and stuff
    function aud_play_pause(mySource) {
        document.getElementById("Audio").src = mySource;
        var myAudio = document.getElementById("Audio");
        if (myAudio.paused) {
            myAudio.play();
        }
        else {
            myAudio.pause();
        }
    }

//Takes input and sets plays(row, col)
	function keySelect(input) //sets row and col of requested file
	{
//		alert(input);
		var rLoop, cLoop;
		var found = false;
		
		for (rLoop = 0; rLoop < 4; rLoop += 1)
		{
//		alert(rLoop);
			for (cLoop = 0; cLoop < 5; cLoop += 1)
			{
				if(input == layout[rLoop][cLoop])
				{
//					alert("Found!");
					row = rLoop;
					col = cLoop;
					found = true;
					break;
				}
			}
			if(found)
			{
				break;
			}
		}
		if (found)
		{
			aud_play_pause(row, col);
		}	
	}

//Toggle keyboard input
	function toggle(){
		document.getElementById("Audio").src = audioArray[row][col].src;
		var myAudio = document.getElementById("Audio");
		myAudio.pause();
		
		if (!play){
			//alert("You have unmuted the soundboard. Press <<Spacebar>> to mute.");
			play = true;
			isMute();
			return play;
		} 
		else{
			play = false;
			isMute();
			return play;
		}
	}
	
	function isMute()
	{
		if(play)
		{
			document.getElementById("isMuted").innerHTML = "Mute";
			//alert(sound);
		}
		else
		{
			document.getElementById("isMuted").innerHTML = "Unmute";
			//alert(sound);
		}	
	}

						