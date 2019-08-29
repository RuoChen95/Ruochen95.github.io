(function() {
	$("#backButton").hide();
	$("#forwardButton").hide();
	$(".workContent").hide();
	window.onload = function() {
		$("#loading").hide();
		$("#backButton").show();
		$("#forwardButton").show();
		$(".workContent").show();
		let carousal_with = document.getElementsByClassName("workContent")[0].clientWidth;
		let carousel__items = document.getElementsByClassName("portfolio-item");
		let carousel__items_length = carousel__items.length;
		let carousel__items_translateX_array = [];

		for (let i = 0; i < carousel__items_length; i++) {
			carousel__items[i].setAttribute("style", "transform: translateX(" + carousal_with * i+ "px)")
			carousel__items_translateX_array.push(i);
		}

		carousel__items_translateX_array[carousel__items_length-1] = -1;


		document.getElementById("forwardButton").addEventListener("click", function() {
			let k = carousel__items_translateX_array.pop();
			carousel__items_translateX_array.unshift(k);
			for (let i = 0; i < carousel__items_length; i++) {

				change_class(i, carousel__items_translateX_array, carousel__items, true);

				carousel__items[i].setAttribute("style", "transform: translateX(" + carousal_with * carousel__items_translateX_array[i]+ "px)") // *
			}
		});

		document.getElementById("backButton").addEventListener("click", function() {
			let k = carousel__items_translateX_array.shift();
			carousel__items_translateX_array.push(k);
			for (let i = 0; i < carousel__items_length; i++) {
				change_class(i, carousel__items_translateX_array, carousel__items, false); // *
				carousel__items[i].setAttribute("style", "transform: translateX(" + carousal_with * carousel__items_translateX_array[i]+ "px)") // *

			}
		});

		function change_class(i, array, DOM, Bool) {
			let classVal = DOM[i].getAttribute("class");
			if ((Bool == true && array[i] == -1 || array[i] == 0) || (Bool == false && array[i] == 1 || array[i] == 0)) {
				if (classVal.includes("animating") == false) {
					classVal = classVal.concat(" animating");
					DOM[i].setAttribute("class", classVal);
				}
			} else {
				classVal = classVal.replace(" animating", "");
				DOM[i].setAttribute("class", classVal);
			}
		}
	};
}());