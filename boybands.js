var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash",];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < loopCount; i++) {

	// Keep track of what we're on in the loop
	var currentBand = bands[i];
	var currentVeggie = vegetables[i];

  // Add the band names into the correct <div>
  var bandString = "";
  var veggieString = "";

  // add a paragraph populated with bands[i] on each loop
	bandString +=   '<p>' + currentBand +'</p>';

	// add the paragraph into the div with the ID boy-bands
	bandElement.innerHTML += bandString;

  // add a paragraph populated with vegetables[i] on each loop
	veggieString +=   '<p>'+ currentVeggie +'</p>';

	// add the paragraph into the div with the ID vegetables
	veggieElement.innerHTML += veggieString;

}