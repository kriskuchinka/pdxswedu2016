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
        event.preventDefault();
    	$('#modal1').fadeOut(250);
    	$('#modal2').fadeIn(250);
    });

    $('#next2').click(function(){
        event.preventDefault();
    	$('#modal2').fadeOut(250);
    	$('#modal3').fadeIn(250);
    });

    $('#next3').click(function(){
        event.preventDefault();
        $('#modal3').fadeOut(250);
        $('#modal4').fadeIn(250);
    });

    $('#submit').click(function(){
        event.preventDefault();
        $('#modal4').fadeOut(250);
        $('#modal5').fadeIn(250);
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

    $('#back3').click(function(){
        $('#modal4').fadeOut(250);
        $('#modal3').fadeIn(250);
    });

// Allow user to exit from modal window
    $('.exit').click(function() {
    	$('#modal1').fadeOut(250);
    	$('#modal2').fadeOut(250);
    	$('#modal3').fadeOut(250);
        $('#modal4').fadeOut(250);
    });
    
});


