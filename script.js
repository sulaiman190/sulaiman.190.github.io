/* Set the width of the side navigation to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "125px";

    // push the content to the left margin of the page content to 250px

     document.getElementById("main").style.marginLeft = "125px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    // push the content to the left margin of the page content to 250px by element id from the home page

    document.getElementById("main").style.marginLeft= "0";
}

// slide start here

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch

// Image List
images[0] = "macbook.png";
images[1] = "iphone.png";
images[2] = "galaxy.png";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
