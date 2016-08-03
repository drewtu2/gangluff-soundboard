function betaTestWarning(){
	
	var response = confirm("ALERT: This page is in BETA TESTING. \n" +
					"By clicking \"OK\" I understand this page may not perform optimally\n" +
					"and that I can only yell at myself if it certain funcations fail to work.");
	if(response)
		generateBoard();
	else
		rickRollMe();
}

/**
 * inputNumField()
 * Prompts user for the number of sounds to put on the board
 */
function inputNumField(){
	//alert("inputNumField");
	var temp = document.createElement("span"); 								//creates span @inputLinePlace with ID of inputLine
		temp.setAttribute("id", "inputLine");
		document.getElementById("inputLinePlace").appendChild(temp);		

	var labelText = document.createTextNode("How many sounds? \t"); 
		document.getElementById("inputLine").appendChild(labelText);			
	
	var inputNumField = document.createElement("INPUT"); 					//Creates Name field
		inputNumField.setAttribute("type", "number");
		inputNumField.setAttribute("value", audioArray.length);
		inputNumField.setAttribute("id", "numSoundInput");
		document.getElementById("inputLine").appendChild(inputNumField);
	
	var submitButton = document.createElement("BUTTON");        			// Create a <button> element that runs "updateDriver()" when clicked
		submitButton.setAttribute("onclick", "updateDriver()");				    				
		submitButton.appendChild(document.createTextNode("Enter"));                          	
	
	document.getElementById("inputLine").appendChild(submitButton);			// Append <button> to <body>
																			//</span>
	updateDriver(); //Run this once so that we can see our inputs. 
}
/**
 * updateDriver()
 * 
 * Runs "createFields()" upon receiving a valid input 
 */
function updateDriver(){
	//alert("updateDriver");
	if(checkValidNumber(getInputValue("numSoundInput"))){
		createFields();
	}	
}

/**
 * checkValidNumber(input)
 * checks to make sure input is greater than 0 and less than 40
	{
 * @param input
 * @returns {Boolean}
 */
function checkValidNumber(input){
	//alert("getValidNumber(input)");
	if(isFinite(input) && input > 0 && input <= 40) {
		numSoundsRequest = input; //Sets global variable numSoundsRequest to valid input
		return true;
	}
	else 
		alert("Must be a number between 0 and 40.");
	return false;
}

/**
 * getInputValue(idName)
 * Retrieves the value of a given input field
 * @param idName
 * @returns
 */
function getInputValue(idName){
	//alert("getInputValue(idName)");
	var inputValue = document.getElementById(idName).value; //x holds value of box
	return inputValue;
}

/**
 * createFields()
 * Creates all the sound input fields and "Save" button
 */
function createFields(){ 

	var difference = numSoundsRequest - numSoundsDisplayed; //difference between sounds requested and sounds on board
	//alert("Difference: " + difference + "\nNumSoundsRequest: " + numSoundsRequest + "\nNumSoundsDisplayed: " + numSoundsDisplayed);
	
	var temp = document.createElement("tag"); //creates place for input fields to go
	temp.setAttribute("id", "writeSound");
	document.getElementById("soundInputFields").appendChild(temp);
	
	temp = document.createElement("tag"); //creates place for buttons to go
	temp.setAttribute("id", "saveBtn");
	document.getElementById("soundInputFields").appendChild(temp);
	
	if(difference == 0){
		//Don't need to do anything! All set :)
	}
	else if(difference > 0){ //We've got too few sounds. Fix it!
		for(var counter = numSoundsDisplayed; counter < numSoundsRequest; counter++) 
		{
			fieldTemplate(counter);
		}
	}
	else if(difference < 0){ //Yooo too many sounds here! Get rid of excess. 
		for(var counter = 0; counter < Math.abs(difference); counter++)
		{
			document.getElementById("Sound" + (numSoundsDisplayed - 1)).remove(); //Removes sounds from board to equal new length
			numSoundsDisplayed--;
		}
	}
	
	if(!runOnce){ //We only need to create the save button the first time we run this

		//Creates a save button
		var saveButton = document.createElement("BUTTON");        			// Create a <button> element
			saveButton.setAttribute("onclick", "saveInput()");				// Run saveInput() when clicked
			btnName = document.createTextNode("Save");     					// Create a text node
			saveButton.appendChild(btnName);                          		// Append the text to <button>
			document.getElementById("saveBtn").appendChild(saveButton);		// Append <button> to <body>
	}

	runOnce = true;
}
/**
 * fieldTemplate(currentSound)
 * This is where each sound input field is actually created.
 * @param currentSound
 */
function fieldTemplate(currentSound){ //template that creates a sound field
	//alert(audioArray.length);
	//alert("fieldTemplate(currentSound)");
	var Heading = document.createTextNode("Sound " + (currentSound + 1)); 	 //Creates heading
	var br = document.createElement("br");									 //newline
	var br2 = document.createElement("br"); 								 //newline
	var nameLabel = document.createTextNode("Name: \t");     				 // Name label
	var urlLabel = document.createTextNode("URL:  \t");     				 // Url label

	var Name = document.createElement("INPUT"); //Creates Name field
		Name.setAttribute("type", "text");
		Name.setAttribute("value", ((audioArray.length > currentSound) ? audioArray[currentSound][0]: "Name")); //checks if current field has value stored in array, if not then fill with "Name"
		Name.setAttribute("id", "Name" + currentSound);
		Name.setAttribute("size", (screen.width/INPUT_FIELD_PERCENT));
	
	var Url = document.createElement("INPUT"); //Creates URL field
		Url.setAttribute("type", "text");
		Url.setAttribute("value", ((audioArray.length > currentSound) ? audioArray[currentSound][1]: "Url")); //checks if current field has value stored in array, if not then fill with "Url"
		Url.setAttribute("id", "Url" + currentSound);
		Url.setAttribute("size", (screen.width/INPUT_FIELD_PERCENT));
		
	var para = document.createElement("p"); //Creates paragraph node
		para.setAttribute("id", "Sound" + currentSound);
		para.appendChild(Heading); //Add all three elements to node on new lines
		para.appendChild(br);
		para.appendChild(nameLabel);
		para.appendChild(Name);
		para.appendChild(br2);
		para.appendChild(urlLabel);
		para.appendChild(Url);
	
	var element = document.getElementById("writeSound"); //identify where to add
		element.appendChild(para); //send to page!
	numSoundsDisplayed++;
}

/**
 * saveInput()
 * take all of the stuff in the input fields and save it into an array. 
 */
function saveInput(){
	alert("Your settings have been saved.");
	audioArray = [];
	
	for(var rowCounter = 0; rowCounter < numSoundsDisplayed; rowCounter++){//runs through every field and gets and saves values	
		audioArray.push([getInputValue(("Name" + rowCounter)), getInputValue("Url" + rowCounter)]);
	}
	downloadInput()
}
/**
 * downloadInput()
 * Takes the saved input and converts it to a file to be downloaded  
 */
function downloadInput(){
	//alert("downloadInput()");

	var eraseNode = document.getElementById("downloadLink"); 
	if(eraseNode)
		eraseNode.remove();

	var sampletext = JSON.stringify(audioArray);
	var a = document.getElementById("downloadFile").appendChild(document.createElement("a"));
	
	a.download = "audioArray.JS";
	a.setAttribute("id", "downloadLink");
	a.href = "data:text/plain;charset=utf-8," + encodeURIComponent("var audioArray = " + sampletext + (";"));
	a.innerHTML = "Download Soundboard Settings";
	
	//alert("completed download");
}


/**
 * Create a board based on number of sounds.  
 */
function generateBoard(){
//	alert("generateBoard");
	//setTimeout(rickRollMe(),60 * 10000);
	setTimeout("rickRollMe()",15 * 60 * 1000);
	determineLayout();
	sourceCounter = 0;
	
//	alert(numRow);
	
	for (var rowCounter = 0; rowCounter < lastRow-1; rowCounter++){//each run creates a row of buttons. runs 1 less than the total number of rows
//		alert("entered loop");
		generateRow(rowCounter, defaultPerRow);
	}
	
	if (numRow != lastRow){ //last row is created - number of columns varies depending on the number of sounds
		generateRow(lastRow-1, numColLastRow);
	}
	else
		generateRow(lastRow-1, defaultPerRow);
}

/**
 * Generates an entire row of buttons and sends it to the page. 
 */
function generateRow(currentRow, colPerRow){ 
//	alert("generateRow");
	var tr = document.createElement("tr");
	for(var colCounter = 0; colCounter < colPerRow; colCounter++){
		tr.appendChild(generateCol(currentRow, colCounter)); //create a row of buttons
	}
//	alert("time to send");
	var element = document.getElementById("button board"); //identify where to add
		element.appendChild(tr); //send to page!
	
}

/**
 * Generates a single td in a row. 
 * returns contents of a td to generateRow. 
 */
function generateCol(currentRow, currentCol){
	var td = document.createElement("td"); //<td align = "center">
		td.setAttribute("align", "center");  
		td.setAttribute("width", screen.width/defaultPerRow);
	var	newButton = document.createElement("button"); //<button class="btn" onclick="aud_play_pause(row, col)"></button>
		newButton.setAttribute("class", "btn");
		newButton.setAttribute("onclick", ("aud_play_pause(" + (((currentRow - 0) * defaultPerRow) + currentCol) + "," + 1 + ")"));
	var	newSpan = document.createElement("div"); //<span id="label">
		newSpan.setAttribute("id", "label");
		var labelText = document.createTextNode(audioArray[sourceCounter][0]); //text node is retrieved from source Arr at source Counter, 0 (name is always at [counter][0]
		newSpan.appendChild(labelText);//</span>		
	td.appendChild(newButton);
	td.appendChild(newSpan); //</td>
		sourceCounter++;
	return td;
}

/**
 * Determines general number of rows and col. 
 * Sets global variables
 */
function determineLayout(){
//	alert("determineLayout()");
	numSounds = audioArray.length;
	numRow = parseInt(numSounds / defaultPerRow); //How many rows of defaultPerRow?
	numColLastRow = numSounds % defaultPerRow; //How many cols in last row? (may not be complete defaultPerRow)
	
	if(numSounds < defaultPerRow){
		defaultPerRow = numSounds;
	}
	
	if(numColLastRow == 0){
		lastRow = numRow;
	}
	
	else{ 
		lastRow = numRow + 1;
	}
	
}
	
function rickRollMe() {
    myWindow = window.open("js/Template/Suprise/RickRollMe.mp4", "RickRolled", "type=fullWindow,fullscreen,scrollbars=yes");
}