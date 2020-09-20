window.setInterval(function(){
	if($( window ).width() > 610) {
		$("#nav-container").show();
		if($('#find').css('background-color') == "rgb(235, 235, 235)") {
			$("#find-dropdown").show();
		}
		else {
			$("#find-dropdown").hide();
		}
	}
	else {
		$("#find-dropdown").hide();
	}

}, 10);

var navDisplay = false;

$("#hamburger").click( function() {
	if($( window ).width() < 611) {
		if (navDisplay == false) {
			navDisplay = true;
			$("#nav-container").show();
		}
		else if (navDisplay == true) {
			navDisplay = false;
			$("#nav-container").hide();
		}
	}
});

dropdown = false;

$("#find").click( function() {
	if($( window ).width() > 610) {
		window.location.replace("/");
	}
	else {
		if(dropdown == false) {
			$(".dropdown-container-mobile").show();
			dropdown = true;
		}
		else {
			$(".dropdown-container-mobile").hide();
			dropdown = false;
		}
	}
});