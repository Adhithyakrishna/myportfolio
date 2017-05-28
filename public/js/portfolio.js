$(document).ready(function() {
	
	 setFlag = "true";
	 urlHolder = {
		"sprite" : "//spritemapper.herokuapp.com",
		"todo": "//mytasklistapp.herokuapp.com/task",
		"photo" : "" ,
		"teresa": "//veraciousverves.blogspot.in/2013/12/mother-teresa.html",
		"civilWar" : "//veraciousverves.blogspot.in/2013/12/civil-war.html",
		"friendship" : "//veraciousverves.blogspot.in/2013/12/friendship.html",
		"savegirlChild" : "//veraciousverves.blogspot.in/2013/12/female-infanticide.html",
		"dearCupid" :  "//veraciousverves.blogspot.in/2016/12/dear-cupid.html",
		"celestial" : "//veraciousverves.blogspot.in/2017/01/celestial-love.html",
		"quintessence" : "//veraciousverves.blogspot.in/2015/04/quintessence-of-life.html"
	}

	function setData() {
		var mailId = "%61%64%68%69%74%68%79%61%2E%77%72%69%74%65%72%40%67%6D%61%69%6C%2E%63%6F%6D";
		var compInfo = "%53%6B%61%76%61%20%53%79%73%74%65%6D%73%20%70%76%74%20%6C%74%64%2C%20%43%6F%69%6D%62%61%74%6F%72%65";
		$(".company").html(unescape(compInfo));
		$(".mail").html(unescape(mailId));
	}
	setData();

	$('.sliderHolder').slick({
		  // centerMode: true,
    	  // centerPadding: '40px',
      	  pauseOnHover: true,
      	  // focusOnSelect :true,
      	  infinite: true,
      	  slidesToShow: 3,
 		  slidesToScroll: 2,
      	  autoplay: true,
      	  autoplaySpeed: 3000,
      	  prevArrow:"<div class='previousArrow'><div class='arrowholderLeft'></div></div>",
  	      nextArrow:"<div class='rightArrow'><div class='arrowholderRight'></div></div>",
	      responsive: [
	      {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },{
          	breakpoint: 640,
          	settings: {
          	  slidesToShow: 1,
          	  slidesToScroll: 1,
          	}
          }]

      	  // prevArrow : "previous",
      	  // nextArrow : "next"
      });

	$.each($(".projectDescription"), function(index, val) {
		var setheight = 0
			if($(this).height() > setheight)
			{
				setheight = $(this).height();
			}
			if(setheight) {
				$(".buildDescription").height(setheight + 52);
			}
	});

	function animateIt()
	{
	    $('.skillbar').each(function(){
	        $(this).find('.skillbar-bar').animate({
	            width:$(this).attr('data-percent')
	        },2000);
	    });
	    $(".skillContainer").addClass('animated');
	}

	function isScrolledIntoView(elem) {

	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

	}

	function allInView() {

	    if(isScrolledIntoView($(".animateit")))
	    {
	        animateIt();
	    }
	}

	var scrollFunction = function() {
		$(window).scroll(function(event) {
			if(!($(".skillContainer").hasClass('animated')) && setFlag) {
				setFlag="false";
			    allInView();
			}
		});
	}

	scrollFunction();

	$( ".project , .writings" ).hover(
	  function() {
	    $( this ).addClass( "animator" );
	  }, function() {
	    $( this ).removeClass( "animator" );
	  }
	);
	$( ".writings" ).hover(
	  function() {
	  	$(".sliderHolder").addClass("pauseIt");
	    $( this ).addClass( "animator" );
	  }, function() {
	    $( ".sliderHolder" ).removeClass( "pauseIt" );
	    $( this ).removeClass( "animator" );
	  }
	);

	$(".socialImg").unbind('click').bind('click', function(event) {
		var navUrl = $(this).siblings('.urlHolder').find('.uri').trigger('click')[0];
		$(navUrl)[0].click();
	});	

	$(".writings, .project").unbind('click').bind('click', function(event) {
		var selectedContent = $(this).attr('id');
		var navUrl = urlHolder[selectedContent];
		// console.log(navUrl);
		window.open(navUrl, '_blank'); 
	});
});