function validateEmail(emailField){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailField).toLowerCase());
}

var nameExist = false;
var emailCorrect = false;
var emailExist = false;
var subjectExist = false;
var messageExist = false;


function clearErrors() {
	$("#errors").css("display", "none");
	$("#error-all-fields").css("display", "none");
	$("#error-email").css("display", "none");
	$("#success").css("display", "none");
	$("#bar").css("background-color", "red");
}

window.setInterval(function(){
	if(validateEmail($("#email-input").val()) == true) {
		emailCorrect = true;
	}
	else {
		emailCorrect = false;
	}
	if($("#name-input").val() == "") {
		nameExist = false;
	}
	else {
		nameExist = true;
	}
	if($("#email-input").val() == "") {
		emailExist = false;
	}
	else {
		emailExist = true;
	}
	if($("#subject-input").val() == "") {
		subjectExist = false;
	}
	else {
		subjectExist = true;
	}
	if($("#message-input").val() == "") {
		messageExist = false;
	}
	else {
		messageExist = true;
	}

	if(nameExist == true && emailCorrect == true && emailExist == true && subjectExist == true && messageExist == true) {
		$("#valid").val("yes");
	}
	else {
		$("#valid").val("no");
	}
}, 10);

function complete() {
	$("#errors").css("display", "block");
	$("#success").css("display", "block");
	$("#bar").css("background-color", "green");
	$("#message-input").val("");
	$("#email-input").val("");
	$("#name-input").val("");
	$("#subject-input").val("");
}

$("#submit").click( function() {
	if(nameExist == true && emailExist == true && subjectExist == true && messageExist == true) {
	}
	else {
		$("#errors").css("display", "block");
		$("#error-all-fields").css("display", "block");
	}

	if(emailCorrect == true) {
	}
	else {
		$("#errors").css("display", "block");
		$("#error-email").css("display", "block");
	}

	if(nameExist == true && emailCorrect == true && emailExist == true && subjectExist == true && messageExist == true) {
		$("#valid").val("yes");
	}
	else {
	}

	if(nameExist == true && emailCorrect == true && emailExist == true && subjectExist == true && messageExist == true) {
		setTimeout(complete, 300);
	}
});

$(".textbox").click( function() {
	clearErrors();
});

