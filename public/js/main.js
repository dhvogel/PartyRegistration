
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
	document.getElementById("hosttext").innerHTML = "<u>" + localStorage["host"] + "</u>";
	document.getElementById("hallroomnumtext").innerHTML = "<u>" + localStorage["hallroomnum"] + "</u>";





}