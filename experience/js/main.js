(function() {

	//filter function
	function filterForItems(el) {
		return el.nodeName == "DIV";
	}
	var workItem = document.getElementsByClassName('portfolio-item');

	for (i = 1; i < workItem.length; i++) {
		workItem[i].style = "display:none";
	}
	var workdivItem = Array.prototype.filter.call(workItem, filterForItems);

	if (document.getElementById('backButton')) {
		document.getElementById('backButton').addEventListener("click", function() {
			var theLastOne = workdivItem[workdivItem.length - 1]

			workdivItem[0].style = "display:none";
			theLastOne.style = "display:show";

			workdivItem.pop();
			workdivItem.unshift(theLastOne);
		});

		document.getElementById('forwardButton').addEventListener("click", function() {
			var theFirstOne = workdivItem[0];

			workdivItem[0].style = "display:none";
			workdivItem[1].style = "display:show";

			workdivItem.shift();
			workdivItem.push(theFirstOne);
		});
	}
})();