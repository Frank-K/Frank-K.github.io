$(document).ready(function() {
	$('#fullpage').fullpage({
		
		anchors: ['Home', 'Intro', 'Academics', 'Projects', 'Projects2'],
		menu: '#menu',
		scrollingSpeed: 800,
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Intro', 'Academics', 'Projects', 'More Projects'],

		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			if (index == 1 && nextIndex != 1){
				$('#fp-nav ul li a span').css('background', '#333');
				$('#fp-nav ul li .fp-tooltip').css('color', '#333');
			} else if (index != 1 && nextIndex == 1){
				$('#fp-nav ul li a span').css('background', 'white');
				$('#fp-nav ul li .fp-tooltip').css('color', 'white');
			}

			if(index == 1 && nextIndex == 2){
				$('#one, #two, #three').addClass('animated fadeInDownBig');
			
				$('#me').addClass('animated zoomIn');
				
				$('#four').addClass('animated fadeInUpBig');
				console.log('hello');
			} else if (index == 2 && nextIndex == 3){
				$('#five').addClass('animated fadeInDownBig');
				$('#six').addClass('animated zoomIn');
				$('#gpa').addClass('animated fadeInUpBig');
				$('#star').addClass('animated fadeInUpBig');
			} else if (index == 3 && nextIndex == 4){
				$('#seven').addClass('animated fadeInDownBig');

				$('#img1').addClass('animated fadeInLeftBig');
				$('#text1').addClass('animated fadeInRightBig');
				
				$('#img2').addClass('animated fadeInLeftBig').css('animation-delay', '.25s');
				$('#text2').addClass('animated fadeInRightBig').css('animation-delay', '.25s');
				
				$('#img3').addClass('animated fadeInLeftBig').css('animation-delay', '.5s');
				$('#text3').addClass('animated fadeInRightBig').css('animation-delay', '.5s');
			} else if (index == 4 && nextIndex == 5){
				$('#eight').addClass('animated fadeInDownBig');

				$('#img4').addClass('animated fadeInLeftBig');
				$('#text4').addClass('animated fadeInRightBig');

				$('#img5').addClass('animated fadeInLeftBig').css('animation-delay', '.25s');
				$('#text5').addClass('animated fadeInRightBig').css('animation-delay', '.25s');

				$('#img6').addClass('animated fadeInLeftBig').css('animation-delay', '.5s');
				$('#text6').addClass('animated fadeInRightBig').css('animation-delay', '.5s');
			}
		}
	});
});