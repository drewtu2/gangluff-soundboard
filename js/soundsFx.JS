/* Such Scripts. Such Control
   Takes ID, plays sound
*/

function soundControl(){
	if(keynum == 32 || keynum == 27) //Space Bar will disable alert/sounds
	{
//		alert(play);
		toggle();
//		alert(play);
	}
//	alert(play);

	//Display or nawh
	if(play){
		keySelect(keynum);
	}
	else
	{
		//alert("Currently Muted. Press <<Space Bar>> to unmute");
	}


}
	function aud_play_pause(a, b) { 
//		alert("aud_play_pause(a, b)");
//		alert("new AudioItem(" + audioDir + audioArray[a][b] + ")" + ".src");
		document.getElementById("Audio").src = new AudioItem(audioDir + audioArray[a][b]).src;
		myAudio = document.getElementById("Audio");

		if(play){
			if (myAudio.paused) {
			//		alert(myAudio.paused);
			myAudio.play();
			} 
			else {
			//	  	alert(myAudio.paused);
			myAudio.pause();
			}
		}
	}

//Takes input and sets plays(row, col)
	function keySelect(input) //sets row and col of requested file
	{
//		alert(input);
		var totalChecked = 0;
		var found = false;
		
		for (var rLoop = 0; rLoop < 4; rLoop += 1)
		{
//		alert(rLoop);
			for (var cLoop = 0; cLoop < 10; cLoop += 1)
			{
				if(input == keyLayout[rLoop][cLoop])
				{
//					alert("Found!" + totalChecked);
					found = true;
					break;
				}
				totalChecked++;
			}
			if(found)
			{
				break;
			}
		}
		if (found)
		{
			aud_play_pause(totalChecked, 1);
		}	
	}

//Toggle keyboard input
	function toggle(){
		//document.getElementById("Audio").src = new AudioItem(audioDir + audioArray[a][b]).src;
		myAudio = document.getElementById("Audio");
		
		if (!play){
			//alert("You have unmuted the soundboard. Press <<Spacebar>> to mute.");
			play = true;
			isMute();
			return play;
		} 
		else{//Muted
			myAudio.pause();
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

						