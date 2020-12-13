
$(function(){
	let popup = document.getElementById('popup-bacground');
	$('.order').on('click', function(){
		popup.style.display = "flex";
	
	});

	$('.close').on('click', function(){
		popup.style.display = "none";
	});

	$('.send').on('click', function(){
		/*let request = {
			'name': $('#name').val(),
			'email': $('#email').val()
		};
		$.post('/api.php', request, function(response){
			if(response == '1') {
				$('#name').val(''),
				$('#email').val(''),
				
			}
		})*/
		popup.style.display = "none";
	});
});
