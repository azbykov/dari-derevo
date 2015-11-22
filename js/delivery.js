(function () {
	var deliveryLink = document.querySelectorAll(".delivery");
	var delivery = document.querySelector(".modal-delivery");
	var deliveryClose = delivery.querySelector(".modal-close");
	for (var i = 0; i < deliveryLink.length; i++){
		deliveryLink[i].addEventListener("click", function(event){
			event.preventDefault();
			delivery.classList.add("modal-window-show");
		});
		deliveryClose.addEventListener("click", function(){
			delivery.classList.remove("modal-window-show");
		});
	
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (delivery.classList.contains("modal-window-show")){
					delivery.classList.remove("modal-window-show");
				}
			}
		});
	};
}());