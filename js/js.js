

var menuButton=document.querySelector(".header-nav__icon");
var buttonClose=document.querySelector(".header-nav-hidden__icon");
var headerNavHidden=document.querySelector(".header-nav-hidden");
// показ меню
function openingMenu() { 
	menuButton.style.opacity="0";
	headerNavHidden.style.right="0";
}
// скрытие меню
function closingMenu() {
	headerNavHidden.style.right="-100%";
	headerNavHidden.style.transition="right 2s";
	menuButton.style.opacity="0.8";
}

menuButton.addEventListener("click",openingMenu);
buttonClose.addEventListener("click",closingMenu);



// Открытие и закрытие popup в разделе main-service


var mainServiceLink=document.body.querySelectorAll(".main-service-column-block-opacity-content__link");

for (var i = 0 ; i < mainServiceLink.length; i++) {
				mainServiceLink[i].onclick=function () {
				var link=this.parentElement.parentElement.parentElement.querySelector(".main-service-column-block-popup");
				link.classList.add("show");
				
			}			
	
}

var iconClose=document.body.querySelectorAll(".main-service-column-block-popup-content__icon");

for (var j = 0 ; j < iconClose.length; j++) {
				iconClose[j].onclick=function () {
				var popup=this.parentElement.parentElement.parentElement.querySelector(".main-service-column-block-popup");
				popup.classList.remove("show");
			}			
	
}