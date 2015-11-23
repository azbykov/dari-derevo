(function () 
 {
	var buyLink = document.querySelectorAll(".btn-buy");
	var basket = document.querySelector(".modal-basket");
	var basketClose = basket.querySelector(".modal-close");
	var plus = basket.querySelector(".more");
	var minus = basket.querySelector(".less");
	var quantity =  basket.querySelector("input[name=quantity]");
	var price = basket.querySelector(".price-sum");
	var priceValue = parseInt(price.innerHTML,10);
	var cost = basket.querySelector(".cost-sum");
	var costValue;
	for (var i = 0; i < buyLink.length; i++){
		buyLink[i].addEventListener("click", function(event){
			event.preventDefault();
			basket.classList.add("modal-window-show");
		});
		basketClose.addEventListener("click", function(){
			basket.classList.remove("modal-window-show");
			/*for (var n=0; n<quantity.length; n++){
			quantity[n].value = 1;
			};*/
		});
	
		window.addEventListener("keydown", function(event){
			if (event.keyCode === 27) {
				if (basket.classList.contains("modal-window-show")){
					basket.classList.remove("modal-window-show");
				}
			}
		});
	};
	/*
	costValue = priceValue * quantity.value;
	cost.innerHTML = costValue;
	window.addEventListener("keydown", function(event){
		if (event.keyCode === 13) {
		costValue = priceValue * quantity.value;
		cost.innerHTML = costValue;
	}
		});
	*/
	plus.addEventListener("click", function(event){
		event.preventDefault();
		quantity.value = parseInt(quantity.value,10)+1;
		costValue = priceValue * quantity.value;
		cost.innerHTML = costValue;
		console.log(priceValue, cost, costValue, cost.innerHtml)
	});
	minus.addEventListener("click", function(event){
		event.preventDefault();
		quantity.value = parseInt(quantity.value,10)-1;
		costValue = priceValue * quantity.value;
		cost.innerHTML = costValue;
	});
	
}());