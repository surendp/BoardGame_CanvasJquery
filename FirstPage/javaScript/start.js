
$(function(){
	
	// p1 = player 1
	// p2 = player 2
	
	var p1 = "p1";
	var p2 = "p2";
	
	//Hiding the Rules and Form at start
	$(".form").hide();
	$(".rules").hide();
	$("#b_home").hide();
	$("#b_start").hide();
	
	$("#b_rules").click(function(){
		//$(this).replaceWith('<img src= "home.png" class="img-responsive" id="b_home">');
		$(this).hide();
		$("#b_start").hide();
		$("#b_home").show();
		$("#b_form").show();
		$("#b_exit").hide();
		$(".home").hide();
		$(".form").hide();
		$(".rules").show(1500);
	}); 
	
	$("#b_form").click(function(){
		$(this).hide();
		$("#b_exit").hide();
		$("#b_rules").show();
		$("#b_start").show();
		$("#b_home").show();
		$(".home").hide();
		$(".rules").hide();
		$(".form").show(1500);
	});
	
	$("#b_home").click(function(){
		$("#b_home").hide();
		$("#b_start").hide();
		$("#b_rules").show();
		$("#b_form").show();
		$("#b_exit").show();
		$(".form").hide();
		$(".rules").hide();
		$(".home").show(1500);
	});
	
	$("#b_start").click(function(){
		var pl1;
		var pl2;
		pl1 = $('input#p1').val();
		pl2 = $('input#p2').val();

		localStorage.firstPlayer = pl1;
		localStorage.secondPlayer = pl2;

		window.location = '../playMode/index.html';
	});
	
	$("#b_exit").click(function(){
		window.close();
	});
	
});
