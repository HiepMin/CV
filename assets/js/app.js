//XỬ LÍ HIỆU ỨNG TYPING Ở SLIDER
document.addEventListener("DOMContentLoaded", function(){
	new WOW().init();
	var typed = new Typed('.slider__caption', {
		strings: [	
			"<h1>NGUYEN MINH HIEP</h1> <h3>A WEB DESIGNER <span>,</span> ^500 NICE TO MEET YOU!</h3>",
		],
		typeSpeed: 50,
		backSpeed: 200,
		backDelay: 500,
		fadeOut: true,
		loop: true
	});
	var popup = document.querySelectorAll(".popup"),
		eye = document.querySelectorAll("a.fa-eye"),
		arrow = document.querySelectorAll(".arrow"),
		arrow_right = document.querySelector(".arrow-right"),
		arrow_left = document.querySelector(".arrow-left"),
		nenden_project = document.querySelectorAll(".nenden-project"),
		nenden_popup = document.querySelectorAll(".nenden-popup"),
		exit = document.querySelector(".cross");

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NỀN ĐEN PROJECT
	for(var i = 0; i < nenden_project.length; i++){
		nenden_project[i].onclick = function(){
			var useData = this.getAttribute("data-dulieu");
			var nd_gan = document.querySelector("." + useData);
			for(var h = 0; h < arrow.length;h++){
				arrow[h].classList.add("popup_active");
			}
			exit.classList.add("popup_active");
			for(var j = 0; j < popup.length; j++){
				popup[j].classList.remove("popup_active");
			}
			nd_gan.classList.add("popup_active");
		}
	}
	
	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT EYE TRÊN PROJECT
	for(var i = 0; i < eye.length; i++){
		eye[i].onclick = function(){
			event.preventDefault();
			var useData = this.getAttribute("data-dulieu");
			var nd_gan = document.querySelector("." + useData);
			exit.classList.add("popup_active");
			for(var h = 0; h < arrow.length;h++){
				arrow[h].classList.add("popup_active");
			}
			for(var j = 0; j < popup.length; j++){
				popup[j].classList.remove("popup_active");
			}
			nd_gan.classList.add("popup_active");
		}
	}
	
	
	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT EXIT
	exit.onclick = function(){
		this.classList.remove("popup_active");
		for(var j = 0; j < popup.length; j++){
			popup[j].classList.remove("popup_active");
		}
		for(var h = 0; h < arrow.length;h++){
			arrow[h].classList.remove("popup_active");
		}
	}
	
	
	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NỀN ĐEN PROJECT
	for(var i = 0; i < nenden_popup.length; i++){
		nenden_popup[i].onclick = function(){
			exit.classList.remove("popup_active");
			for(var j = 0; j < popup.length; j++){
				popup[j].classList.remove("popup_active");
			}
			for(var h = 0; h < arrow.length;h++){
				arrow[h].classList.remove("popup_active");
			}
		}
	}
	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT ARROW PROJECT
	var chi_so_active = 0;
	arrow_right.onclick = function(){
		var slide_current = popup[chi_so_active];
		if(chi_so_active < popup.length - 1){chi_so_active++}
		else if(chi_so_active == popup.length - 1){chi_so_active = 0}
		var slide_next = popup[chi_so_active];
		for(var i = 0; i < popup.length; i++){
			popup[i].classList.remove("popup_active");
		}
		slide_current.classList.remove("popup_active");
		slide_next.classList.add("popup_active");
	}
	arrow_left.onclick = function(){
		var slide_current = popup[chi_so_active];
		if(chi_so_active > 0){chi_so_active--}
		else if(chi_so_active == 0){chi_so_active = popup.length - 1}
		var slide_next = popup[chi_so_active];
		for(var i = 0; i < popup.length; i++){
			popup[i].classList.remove("popup_active");
		}
		slide_current.classList.remove("popup_active");
		slide_next.classList.add("popup_active");
	}
}, false)



//JQUERY
$(function(){

	var nav_height = $(".nav").height();
	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO CÁC NÚT ĐIỀU HƯỚNG
	$(".nav__item").click(function(){
		$(".nav__item").removeClass("nav__item--active");
		$(this).toggleClass("nav__item--active");
		$(".nav__menu").toggleClass('nav__menu--active');
		$(".nav__burger").removeClass("active");
		return false;
	});


	// //XỬ LÍ HIỆU ỨNG KHI CLICK VÀO CÁC NÚT LINK ĐIỀU HƯỚNG Ở NAVBAR
	$(".nav__link").click(function(){
		event.preventDefault();
		$("html,body").animate({scrollTop: ($(this.hash).offset().top - nav_height + 20)},1000);
	});


	// XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT BURGER
	$(".nav__burger").click(function(){
		$(this).toggleClass("active");
		$(".nav__menu").toggleClass("nav__menu--active");
	});

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT CHUYỂN SECTION
	$(".slider__btn").click(function(){
		$("html,body").animate({scrollTop: $(".about").offset().top - nav_height}, 1500);
	});

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO CÁC NÚT CONTACT ME Ở PHẦN ABOUT ME
	$(".btn-about").click(function(){
		event.preventDefault();
		$("html,body").animate({scrollTop: $(this.hash).offset().top}, 1500);
	});

	//XỬ LÍ HIỆU ỨNG KHI SCROLL CHUỘT
	var link_dieu_huong = $(".nav__link");
	$(window).scroll(function(){
		var navLocation = $(this).scrollTop() + nav_height;
		link_dieu_huong.each(function(){
			var sectionOffset = $(this.hash).offset().top;	
			if(navLocation >= nav_height + 30){
				$(".nav").addClass("active");
				$(".btn--top").addClass("dira");
				if(navLocation >= $("#skill-page").offset().top -200){
					$(".html").css({width: "91%"});
					$(".css").css({width: "93%"});
					$(".js").css({width: "70%"});
					$(".sass").css({width: "76%"});
					$(".jqu").css({width: "70%"});
					$(".bs").css({width: "80%"});
					$(".gulp").css({width: "65%"});
					$(".ts").css({width: "60%"});
					$(".progress_value").addClass("sohienra");
				}
			}
			else{
				$(".btn--top").removeClass("dira");
				$(".nav").removeClass("active");
			}
			if ( sectionOffset <= navLocation ) {
				$(this).parent().addClass('nav__item--active');
				$(this).parent().siblings().removeClass('nav__item--active');
			}
			if ( sectionOffset <= navLocation ) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});

	// //XỬ LÍ HIỆU ỨNG FILTER
	$(".project__btn-filter .button").click(function(){
		$(".project__btn-filter .button").removeClass("active");
		$(this).addClass("active");
		var dataFilter =$(this).data("filter");
		var text = $(".project__btn-filter h1").text(dataFilter);
		if(dataFilter == "All"){
			$(".one-block-project").addClass("hidden");
			setTimeout(function(){
				$(".one-block-project").removeClass("hidden");
			}, 500);
		}
		else{
			$(".one-block-project").addClass("hidden");
			setTimeout(function(){
				$("." + dataFilter).removeClass("hidden");
			}, 500);
		}
	});

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT TOP
	$(".btn--top").click(function(){
		$("html,body").animate({scrollTop: 0}, 1000);
	});

});


