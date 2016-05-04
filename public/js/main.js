
function fillFields() {
	var hostChoices = ["David Greene", "Bob Saget", "D'Glester Hardunkichud", "Scoish 'Velociraptor' Maloish", "The Player Formerly Known as MouseCop", "Cee Lo Green", "Drake", "Harriet Tubman", "Nikola Tesla", "Dwayne 'The Rock' Johnson"];
	var roomChoices = ["David Greene's House", "'The Pit'", "Club Pipe", "Faculty Residence Apartment", "Who Knows", "West 100", "The Arboretum", "The Forest", "Somewhere in Substance-Free"];
	var dayChoices = ["Tuesday", "Wednesday", "Monday", "This Friday to Next Friday", "July 4th", "Boxing Day", "Christmas Eve", "Pi Day (March 14th)", "Super Bowl Sunday", "Flag Day", "Armistice Day"];
	var attendanceChoices = ["The entirety of Colby", "1 person :(", "4 Mules", "David Greene", "The Pope", "Sarah Palin", "Mr. Clean", "Nicolas Cage", "The 1970 Miami Dolphins Offensive Line"];
	var startChoices = ["The Early Morn'", "1:00 AM", "11:37 PM", "3:45 AM", "17:00 Hours", "Time is relative", "4:00 AM PDT", "13:00 GMT"];
	var alcoholChoices = ["Natural Light (7 cases)", "Allen's - The Champaign of Maine (500 mL)", "17 Overly fermented grapes", "Kambucha (4 fl oz)", "Rubbing Alcohol (1 L)", "Milwaukee's Premium Beer (3 individual 12 fl oz cans)", "Andre (30 bottles)", "O'Doul's Non-Alcoholic Beer (10 racks)"];
	var foodChoices = ["Sour Cream (6 pounds)", "Fly Fishing Fudge Ice Cream (1 gallon)", "Corndogs, Jackie (for all the people)", "Uncooked Hotdogs (20 packs)", "1 squirrel (weight determined when trapped)"];
	var nonalcChoices = ["Holy Water (12 fl oz)", "Diet Dr. Pepper (1 gallon)", "Purple Flurp"];
	var addconsChoices = ["None"];
	var hostphoneChoices = ["111-111-1111"];
	var hostemailChoices = ["email@email.com"]

	$('#host').val(hostChoices[Math.floor(Math.random() * hostChoices.length)]);
	$('#hallroomnum').val(roomChoices[Math.floor(Math.random() * roomChoices.length)]);
	$('#day').val(dayChoices[Math.floor(Math.random() * dayChoices.length)]);
	$('#estattendance').val(attendanceChoices[Math.floor(Math.random() * attendanceChoices.length)]);
	$('#starttime').val(startChoices[Math.floor(Math.random() * startChoices.length)]);
	$('#alcohol').val(alcoholChoices[Math.floor(Math.random() * alcoholChoices.length)]);
	$('#food').val(foodChoices[Math.floor(Math.random() * foodChoices.length)]);
	$('#nonalc').val(nonalcChoices[Math.floor(Math.random() * nonalcChoices.length)]);
	$('#considerations').val(addconsChoices[Math.floor(Math.random() * addconsChoices.length)]);
	$('#hostphone').val(hostphoneChoices[Math.floor(Math.random() * hostphoneChoices.length)]);
	$('#hostemail').val(hostemailChoices[Math.floor(Math.random() * hostemailChoices.length)]);
	
	Materialize.updateTextFields()
}

function submit() {
	localStorage["host"] = $('#host').val()
	localStorage["hallroomnum"] = $('#hallroomnum').val()
	localStorage["day"] = $('#day').val()
	localStorage["estattendance"] = $('#estattendance').val()
	localStorage["starttime"] = $('#starttime').val()
	localStorage["alcohol"] = $('#alcohol').val()
	localStorage["food"] = $('#food').val()
	localStorage["nonalc"] = $('#nonalc').val()
	localStorage["considerations"] = $('#considerations').val()
	localStorage["hostphone"] = $('#hostphone').val()
	localStorage["hostemail"] = $('#hostemail').val()
	window.location.href = "form.html"
}

function fillForm() {
	alert("It looks weird now, but it will look like the actual form when printed.")
	document.getElementById("hosttext").innerHTML = "<u>" + formatField(document.getElementById("hosttext").innerHTML,localStorage["host"]) + "</u>";
	document.getElementById("hallroomnumtext").innerHTML = "<u>" + formatField(document.getElementById("hallroomnumtext").innerHTML,localStorage["hallroomnum"]) + "</u>";
	document.getElementById("curdaytext").innerHTML = "<u>" + formatField(document.getElementById("curdaytext").innerHTML,getCurrentDate()) + "</u>";
	document.getElementById("daytext").innerHTML = "<u>" + formatField(document.getElementById("daytext").innerHTML,localStorage["day"]) + "</u>";
	document.getElementById("estatttext").innerHTML = "<u>" + formatField(document.getElementById("estatttext").innerHTML,localStorage["estattendance"]) + "</u>";
	document.getElementById("starttimetext").innerHTML = "<u>" + formatField(document.getElementById("starttimetext").innerHTML,localStorage["starttime"]) + "</u>";
	document.getElementById("alctext").innerHTML = "<u>" + formatField(document.getElementById("alctext").innerHTML,localStorage["alcohol"]) + "</u>";
	document.getElementById("foodtext").innerHTML = "<u>" + formatField(document.getElementById("foodtext").innerHTML,localStorage["food"]) + "</u>";
	document.getElementById("nonalctext").innerHTML = "<u>" + formatField(document.getElementById("nonalctext").innerHTML,localStorage["nonalc"]) + "</u>";
	document.getElementById("constext").innerHTML = "<u>" + formatField(document.getElementById("constext").innerHTML,localStorage["considerations"]) + "</u>";
	document.getElementById("hostnametext").innerHTML = "<u>" + formatField(document.getElementById("hostnametext").innerHTML,localStorage["host"]) + "</u>";
	document.getElementById("hostphonetext").innerHTML = "<u>" + formatField(document.getElementById("hostphonetext").innerHTML,localStorage["hostphone"]) + "</u>";
	document.getElementById("hostroomtext").innerHTML = "<u>" + formatField(document.getElementById("hostroomtext").innerHTML,localStorage["hallroomnum"]) + "</u>";
	document.getElementById("ishosttext").innerHTML = "<u>" + formatField(document.getElementById("ishosttext").innerHTML,"x") + "</u>";
}

function formatField(divHTML, text) {
	var diff = divHTML.length - (text.length)
	for (var i=0; i<diff; i++) {
		text += "_"
	}
	return text
}

function getCurrentDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = mm+'/'+dd+'/'+yyyy;
	return today
}




