/*
	ZeroFour by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
var keynum; //Holds the key code of the key pressed

var keyLayout = [ //Creates map of keyboard to compare against keynum
				[49, 50, 51, 52, 53, 54, 55, 56, 57, 48],
				[81, 87, 69, 82, 84, 89, 85, 73, 79, 80],
				[65, 83, 68, 70, 71, 72, 74, 75, 76, 186],
				[90, 88, 67, 86, 66, 78, 77, 188, 190, 191]
			  ];
var myAudio;
var row;
var col;
var audioDir = "Sound Files/";
var play = true;
var numSounds;
var numSoundsDisplayed = 0;
var numSoundsRequested = audioArray.length;
var sourceArr = audioArray;
var sourceCounter;
var runOnce = false;

//Generate board
var numRow = 0;
var numColLastRow;
var lastRow;
var defaultPerRow = 10;

function AudioItem(src) {
  this.src = src;
} 

var INPUT_FIELD_PERCENT =  20;