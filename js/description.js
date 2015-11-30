(function() {
	var linkDescrOak = document.querySelector(".descr-oak");
	var descrOak= document.querySelector(".modal-descr-oak");
	var descrClose = descrOak.querySelector(".modal-close");
	linkDescrOak.addEventListener("click", function (event) {
		event.preventDefault();
		descrOak.classList.add("modal-window-show");
	});
	descrClose.addEventListener("click", function () {
		descrOak.classList.remove("modal-window-show");
	});
	window.addEventListener("keydown", function () {
			if (descrOak.classList.contains("modal-window-show")) {
				descrOak.classList.remove("modal-window-show");
			}
	});
}());
