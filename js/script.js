// On page load
$(document).ready(function() {
    console.log("External JS is ready!");
    
// Show modal1 on create-account click
    $('#create-account').click(function() {
    	console.log("You clicked to create an account.");
    	$('#modal1').fadeIn(250);
    });

// Click events for modal next buttons
    $('#next1').click(function(){
    	$('#modal1').fadeOut(250);
    	$('#modal2').fadeIn(250);
    });

    $('#next2').click(function(){
    	$('#modal2').fadeOut(250);
    	$('#modal3').fadeIn(250);
    });

    $('#submit').click(function(){
    	$('#praise').fadeIn(200);

    });    

// Click events for modal back buttons
	$('#back1').click(function(){
		$('#modal2').fadeOut(250);
		$('#modal1').fadeIn(250);
	});

	$('#back2').click(function(){
		$('#modal3').fadeOut(250);
		$('#modal2').fadeIn(250);
	});

// Allow user to exit from modal window
    $('.exit').click(function() {
    	$('#modal1').fadeOut(250);
    	$('#modal2').fadeOut(250);
    	$('#modal3').fadeOut(250);
    });
    
});