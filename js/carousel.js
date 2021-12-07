// Carousel container Next/previous controls
var scrollAmountlist = [0, 0, 0, 0];

function sliderScroll(movie_category, side) {
	var i;
	if (movie_category === "top_movies_category"){i = 0;} 
	else if (movie_category === "top_action_category"){i = 1;}
	else if (movie_category === "top_adventure_category"){i = 2;}
	else if (movie_category === "top_horror_category"){i = 3;}
	
	var scrollAmount = scrollAmountlist[i];
	var prev = document.getElementsByClassName("prev")[i];
	var next = document.getElementsByClassName("next")[i];
	var scrollPerClick = 400;
	var slider_select = "."+movie_category+" .mySlides";
	var sliders = document.querySelector(slider_select);
	console.log(movie_category);

	if (side === "left") {
		sliders.scrollTo({top: 0, left: (scrollAmount -= scrollPerClick), behavior: "smooth"});
		if (scrollAmount < 0) {scrollAmount = 0;}
	} else if (side === "right") {
		if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
			sliders.scrollTo({top: 0, left: (scrollAmount += scrollPerClick), behavior: "smooth"});
		}
	}

	scrollAmountlist[i] = scrollAmount

	console.log("Scroll Amount: ", scrollAmount);
	console.log(sliders.scrollWidth - sliders.clientWidth);
	
	if (scrollAmount === 0) {prev.style.visibility = "hidden";} 
	else if (scrollAmount != 0 && scrollAmount < sliders.scrollWidth - sliders.clientWidth) {
		prev.style.visibility = "visible";
		next.style.visibility = "visible";
	} else if (scrollAmount >= sliders.scrollWidth - sliders.clientWidth) {next.style.visibility = "hidden";}
}

