(function() {
	var linkDescr = document.querySelector(".descr-oak");
	var descr= document.querySelector(".modal-description");
	var descrClose = descr.querySelector(".modal-close");
	linkDescr.addEventListener("click", function (event) {
		event.preventDefault();
		descr.classList.add("modal-window-show");
	});
	descrClose.addEventListener("click", function () {
		descr.classList.remove("modal-window-show");
	});
	window.addEventListener("keydown", function () {
			if (descr.classList.contains("modal-window-show")) {
				descr.classList.remove("modal-window-show");
			}
	});
}());
