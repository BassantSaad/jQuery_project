// ///////////////// hesder side bsr ///////////// //
var main = document.getElementById('main')

$('#my-btn').click(function () {
    $('#side-bar').animate({width:'15%'})
    $('#main').animate({marginLeft:'15%'})
})

$('#close').click(function () {
    $('#side-bar').animate({width:'0%'})
    $('#main').animate({marginLeft:'0%'})
})

// /////////// Singer slide //////////// //

$('.one h4').click(function () {
    $('.one p').slideToggle(500)
    $('.tow p').slideUp(500)
    $('.three p').slideUp(500)
    $('.four p').slideUp(500)
});
$('.tow h4').click(function () {
    $('.tow p').slideToggle(500)
    $('.one p').slideUp(500)
    $('.three p').slideUp(500)
    $('.four p').slideUp(500)
});
$('.three h4').click(function () {
    $('.three p').slideToggle(500)
    $('.one p').slideUp(500)
    $('.tow p').slideUp(500)
    $('.four p').slideUp(500)
});
$('.four h4').click(function () {
    $('.four p').slideToggle(500)
    $('.one p').slideUp(500)
    $('.tow p').slideUp(500)
    $('.three p').slideUp(500)
});

// /////////// Count down //////////// //

function timer() {
	
	var time = new Date("2022 12:59:59");			
    time = (Date.parse(time) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeNow = time - now;

		var day = Math.floor(timeNow / 86400); 
		var hour = Math.floor((timeNow - (day * 86400)) / 3600);
		var min = Math.floor((timeNow - (day * 86400) - (hour * 3600 )) / 60);
		var sec = Math.floor((timeNow - (day * 86400) - (hour * 3600) - (min * 60)));
  
		if (hour < "10") { hour = "0" + hour }
		if (min < "10") { min = "0" + min }
		if (sec < "10") { sec = "0" + sec }

		$("#day").html( day + "<span> D</span>");
		$("#hour").html("0 - " + hour + "<span> H</span>");
		$("#min").html("0 - " + min + "<span> M</span>");
		$("#sec").html("0 - " + sec + "<span> S</span>");		
	}
	setInterval(function() {timer()});
