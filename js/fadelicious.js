// JavaScript Document
function slideRight(){
	currentImage = $("#images li.current");
	nextImage = $("#images li.current").prev();
	if (nextImage.length == 0){
		nextImage = $("#images li:last");
	}
	currentImage.addClass("previous").removeClass("current");
	nextImage.addClass("current").css({left:"-930px"});
	nextImage.animate({left:"0px"}, 400, function(){currentImage.removeClass("previous"); });
	updateIndicator();
};

function slideLeft(){
	currentImage = $("#images li.current");
	nextImage = $("#images li.current").next();
	if (nextImage.length == 0){
		nextImage = $("#images li:first");
		}
	currentImage.addClass("previous").removeClass("current");
	nextImage.addClass("current").css({left:"930px"});
	nextImage.animate({left:"0px"}, 400, function(){currentImage.removeClass("previous"); });
	updateIndicator();
};

function updateIndicator(){
	var images_arr = $("#images li"),
		currentImageIndicator_arr = $("#circles li"),
		currentSlide = images_arr.length +1; //initialize to invalid index	  
	for (i=0, j=images_arr.length; i<j; i++){
		if (images_arr[i].className == "current"){
			$("#circles li.current").removeClass('current');
			$("#circles li:nth-child(" + ( i+1) + ")").addClass("current"); //nth-child starts a 1 not 0
		}
	}
}

$(function(){$("li#previous").click(function(){slideLeft();});
			 $("li#next").click(function(){slideRight()});
	}); 