(function () {
	var buyLink = document.querySelectorAll(".btn-buy");
	var basket = document.querySelector(".modal-basket");
	var basketClose = basket.querySelector(".modal-close");
	for (var i = 0; i < buyLink.length; i++){
		buyLink[i].addEventListener("click", function(event){
			event.preventDefault();
			basket.classList.add("modal-window-show");
		});
		basketClose.addEventListener("click", function(){
			basket.classList.remove("modal-window-show");
		});
	
		window.addEventListener("keydown", function(event){
			if (event.keyCode === 27) {
				if (basket.classList.contains("modal-window-show")){
					basket.classList.remove("modal-window-show");
				}
			}
		});
	};	
}());