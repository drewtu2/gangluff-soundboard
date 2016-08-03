/**
 * Drag and Drop JS code
 * Code taken from http://www.htmlgoodies.com/html5/javascript/drag-files-into-the-browser-from-the-desktop-HTML5.html#fbid=dD99iktzHCS 
 */

//Checks if browser supports drag and drop
if(window.FileReader) { 
  addEventHandler(window, 'load', function() {
    var status = document.getElementById('status');
    var drop   = document.getElementById('drop');
    var list   = document.getElementById('list');
  	
    function cancel(e) {
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    }
  
    // Tells the browser that we *can* drop on this target
    addEventHandler(drop, 'dragover', cancel);
    addEventHandler(drop, 'dragenter', cancel);
  });
} else { 
  document.getElementById('status').innerHTML = 'Your browser does not support the HTML5 FileReader.';
}

/**
 * Binds handler to an event
 * @param obj
 * @param evt
 * @param handler
 */
function addEventHandler(obj, evt, handler) {
    if(obj.addEventListener) {
        // W3C method
        obj.addEventListener(evt, handler, false);
    } else if(obj.attachEvent) {
        // IE method.
        obj.attachEvent('on'+evt, handler);
    } else {
        // Old school method.
        obj['on'+evt] = handler;
    }
}
/**
 * Process Dropped file
 */
addEventHandler(drop, 'drop', function (e) {
	  e = e || window.event; // get window.event if e argument missing (in IE)   
	  if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

	  var dt    = e.dataTransfer;
	  var files = dt.files;
	  for (var i=0; i<files.length; i++) {
	    var file = files[i];
	    var reader = new FileReader();
	      
	    //attach event handlers here...
	   
	    reader.readAsDataURL(file);
	  }
	  return false;
	});