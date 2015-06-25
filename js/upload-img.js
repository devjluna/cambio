(function() {
	// var $picture = $('.profile__avatar__img').attr('src');
	var $avatar = $('.profile__avatar__img').attr('src');

	var cropContainerAvatarOptions = {
		customUploadButtonId:'btnAvatar',
		processInline:true,
		uploadUrl:'img_save_to_file.php',
		cropUrl:'img_crop_to_file.php',
		modal: false,
		doubleZoomControls:false,
		rotateControls: false,
		loaderHtml:'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
		onBeforeImgUpload: function(){
			$('#modalEditProfile').modal('show');
		},
		onAfterImgCrop: function(){
			console.log('Se recorto con éxito');
			var $newAvatar = $('.croppedImg').attr('src');
			$('.profile__avatar__img').prop('src', $newAvatar);
			// console.log($newAvatar);

			$('#modalEditProfile').modal('hide');
		},
		onError: function(errormsg){
			console.log('onError:'+errormsg)
		}
	}
	var cropContainerModal = new Croppic('cropContainerModal', cropContainerAvatarOptions);

	$('.btnControlReset').on('click', function() {
		cropContainerModal.reset();
	});

	$('.btnControlCrop').on('click', function() {
		cropContainerModal.crop();
	})




	function validateAvatar(val) {
		switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
	        case 'gif':
	        case 'jpg':
	        case 'png':
	        	$('#modalEditProfile').modal('show');
	            break;
	        default:
	            $($avatar).val('');
	            $('.avatar-error').text('Ingrese una imagen por favor');
	            // console.log('error en imagen');
		};
	}

})();