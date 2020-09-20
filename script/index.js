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

 $(".banner-image, .arrow").mouseover(function(){
 	if ($( window ).width() > 610) {
    	$(".arrow").show();
    }
  });

  $(".banner-image, .arrow").mouseout(function(){
    $(".arrow").hide();
  });

$(".dropdown-text-mobile").click( function() {
	document.getElementById("selection-bar").scrollIntoView();
	$(".dropdown-container-mobile").hide();
	$("#nav-container").hide();
});

function setSlide(number) {
	if(number == 1) {
		$("#slide1").fadeIn(3000);
		$("#slide2").fadeOut(3000);
	}
	if(number == 2) {
		$("#slide2").fadeIn(3000);
		$("#slide1").fadeOut(3000);
	}
}

var currentSlide = 1;

window.setInterval(function(){
	currentSlide++;
	if (currentSlide > 2) {
		currentSlide = 1;
	}
	console.log(currentSlide);
	setSlide(currentSlide);
}, 10000);

$("#right-arrow").click(function(){
  currentSlide++;
  if (currentSlide > 2) {
		currentSlide = 1;
  }
  console.log(currentSlide);
  setSlide(currentSlide);
});

$("#left-arrow").click(function(){
  currentSlide = currentSlide - 1;
  if (currentSlide < 1) {
	currentSlide = 2;
  }
  console.log(currentSlide);
  setSlide(currentSlide);
  currentSlide++;
});

window.setInterval(function(){
	if($( window ).width() > 610) {
		$("#nav-container").show();
	}
}, 10);
