
var ourRequest = new XMLHttpRequest();

// open the link (.json)
ourRequest.open('GET', 'https://api.covid19india.org/state_district_wise.json');

ourRequest.onload = function(){

	// print the .json data in the console 
	console.log(ourRequest.responseText);

		// storing the .json data in the ourData variable 	
	// var ourData = ourRequest.responseText;
	 	// only print [ , bcoz , it doesnt know that the requested link is the json data 
	// console.log(ourData[0]);


	
	
	// var ourData = JSON.parse(ourRequest.responseText);
	// console.log(ourData[0]);
};

ourRequest.send();