(function() {
	// Agregando plugin mediaelementplayer
	$('.media__video').mediaelementplayer({
        loop: true,
        features: ['playpause','progress','current','duration','tracks','volume','fullscreen'],
    });
    $('.media__item__video').mediaelementplayer({
        loop: true,
        alwaysShowControls: false,
         startVolume: 0,
    });

	$('.scroll').slimScroll({
		height: '615px',
		color: '#f77278',
    	size: '12px',
    	borderRadius: '0px',
    	opacity: '.8',
    	alwaysVisible: true,
    	distance: 0,
    	railVisible: true,
    	railColor: '#a70006',
    	railOpacity: 0.9,
    	railBorderRadius : '0px'
	});

	function getVideo() {
		$('.media__item').on('click', function(event){
		    event.preventDefault();
			var itemVideo = $('.media__item');
		    var linkVideo = $(this).find('.media__item__video')[1];
		    var urlVideo = linkVideo.childNodes[1].src;

			$(itemVideo).removeClass('media__item--active');
		    $(this).addClass('media__item--active');
		    // console.log(urlVideo);
		    showVideo(urlVideo);
		})
	}
	getVideo();

	function showVideo (urlVideo) {
		var reproductor = $('.media__container');
		reproductor.remove();
		var newReproductor = $('<video width="640" height="360" style="width: 100%; height: 100%;" class="media__video" preload="none" autoplay="true"><source type="video/youtube" src="'+urlVideo+'"/></video>');
		var newVideoContainer = $('<div class="media__container"></div>');
		newVideoContainer.append(newReproductor);
		$('.media > .col-sm-12:nth-child(1)').append(newVideoContainer);
		newReproductor.mediaelementplayer({
			loop:true,
			features: ['playpause','progress','current','duration','tracks','volume','fullscreen']
		});
	}

})();