(function() {
	// Llamando a plugin cropit

	// Estilizando botón input file
    $('.cropit-image-select').click(function() {
        $('.cropit-image-input').click();
    });

    // $('form').submit(function() {
    //   // Move cropped image data to hidden input
    //   var imageData = $('.image-editor').cropit('export');
    //   $('.hidden-image-data').val(imageData);

    //   // Print HTTP request params
    //   var formValue = $(this).serialize();
    //   $('#result-data').text(formValue);

    //   // Prevent the form from actually submitting
    //   return false;
    // });


    // Validando configuración personal
    $('#configureForm')
	    .formValidation({
	    	framework: 'bootstrap',
	    	
	    	fields: {
	    		name: {
					validators: {
						notEmpty: {
							message: 'Por favor ingresa tu nombre'
						},
						stringLength: {
	                        min: 2,
	                        message: 'Por favor ingresa como mínimo 2 caracteres'
	                    },
	                    regexp: {
	                        regexp: /^[a-zA-Z\s]+$/,
	                        message: 'Por favor ingrese un formato válido'
	                    }
					}
				},
				fname: {
					validators: {
						notEmpty: {
							message: 'Por favor ingresa tu apellido paterno'
						},
						stringLength: {
	                        min: 2,
	                        message: 'Por favor ingresa como mínimo 2 caracteres'
	                    },
	                    regexp: {
	                        regexp: /^[a-zA-Z\s]+$/,
	                        message: 'Por favor ingrese un formato válido'
	                    }
					}
				},
				lname: {
					validators: {
						notEmpty: {
							message: 'Por favor ingresa tu apellido materno'
						},
						stringLength: {
	                        min: 2,
	                        message: 'Por favor ingresa como mínimo 2 caracteres'
	                    },
	                    regexp: {
	                        regexp: /^[a-zA-Z\s]+$/,
	                        message: 'Por favor ingrese un formato válido'
	                    }
					}
				},
				dni: {
					validators: {
						notEmpty: {
							message: 'Por favor ingresa tu dni'
						},
						stringLength: {
	                        min: 8,
	                        max: 8,
	                        message: 'Por favor ingrese solo 8 dígitos'
						},
						integer: {
	                        message: 'Por favor ingrese un formato válido'
	                    }
					}
				},
				ruc: {
					validators: {
						stringLength: {
	                        min: 11,
	                        max: 11,
	                        message: 'Por favor ingrese solo 11 dígitos'
						},
						integer: {
	                        message: 'Por favor ingrese un formato válido'
	                    }
					}
				},
				sex: {
					row: '.form-group',
					validators: {
						notEmpty: {
							message: 'Por favor selecciona tu sexo'
						}
					}
				},
				datebirth: {
					row: '.form-group',
					validators: {
						notEmpty: {
							message: 'Por favor selecciona tu sexo'
						}
					}
				},
				placebirth: {
					row: '.form-group',
					validators: {
						notEmpty: {
							message: 'Por favor selecciona tu sexo'
						}
					}
				},
				email: {
	                validators: {
	                    notEmpty: {
	                        message: 'Por favor ingresa tu correo electrónico'
	                    },
	                    emailAddress: {
	                        message: 'Por favor ingresa un formato válido'
	                    }
	                }
	            },
	            phone: {
					validators: {
						notEmpty: {
							message: 'Por favor ingresa tu número de teléfono'
						},
						stringLength: {
	                        min: 9,
	                        max: 9,
	                        message: 'Por favor ingrese sólo 9 dígitos añadiendo código postal'
						},
						integer: {
	                        message: 'Por favor ingrese un formato válido'
	                    }
					}
				},
				mobile: {
					validators: {
						notEmpty: {
							message: 'Por favor ingresa tu número de celular'
						},
						stringLength: {
	                        min: 9,
	                        max: 9,
	                        message: 'Por favor ingrese sólo 9 dígitos'
						},
						integer: {
	                        message: 'Por favor ingrese un formato válido'
	                    }
					}
				},
				seal: {
					row: '.form-group',
					validators: {
						notEmpty: {
							message: 'Por favor ingresa tu sello'
						}
					}
				},
	    	}
	    })
		.on('err.validator.fv', function(e, data) {
		    data.element
		        .data('fv.messages')
		        .find('.help-block[data-fv-for="' + data.field + '"]').hide()
		        .filter('[data-fv-validator="' + data.validator + '"]').show();
		})
		.on('success.form.fv', function(e) {
			e.preventDefault();
			var $form = $(e.target),
				fv = $form.data('formValidation');
			$.ajax({
	            url: $form.attr('action'),
	            type: 'POST',
	            data: $form.serialize(),
	            success: function(result) {
	                // ... Process the result ...
	            }
	        });
		});

	// Validando envío de galeria
	$('#uploadForm')
		.formValidation({
			framework: 'bootstrap',
			fields: {
				'gallery[]': {
	                validators: {
	                    notEmpty: {
	                        message: 'Por favor ingresa tu imagen'
	                    }
	                }
	            }
			}
		})

		
		.on('success.field.fv', function(e, data) {
	        if (data.fv.getInvalidFields().length > 0) {
	            data.fv.disableSubmitButtons(true);
	        }
	    });

	// Activando a template upload
	$('.add-foto').on('click', addTemplateClose);

	// Función que devuelve el template upload
	function addTemplateClose(e) {
		var template = '';
		template += '<div class="upload">'
		template += '<div class="fileinput fileinput-new upload__thumbnails" data-provides="fileinput">'
		template += '<a href="" class="upload__close">&times;</a>'
		template += '<div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">'
		template += '<span class="btn-file upload__btn">'
		template += '<span class="fileinput-new">'
		template += '+<br><span class="upload__text">Subir foto</span>'
		template += '</span>'
		template += '<input type="file" name="gallery[]" id="preview-img" class="upload__validate upload__val add__fileinput-new" accept="image/jpg, image/JPG,image/JPEG, image/jpeg">'
		template += '</span>'
		template += '</div>'
		template += '<div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;">'
		template += '</div>'
		template += '</div>'
		template += '<div>'
		template += '<input type="text" id="" name="nameimg[]" class="form-control upload__name" placeholder="Agregale un nombre">'
		template += '</div>'
		template += '</div>'


		
			//.css('opacity','0')
			//.animate({'opacity':'1'}, 'slow')
			if (document.getElementsByClassName('upload').length < 12){
				$(template).appendTo('.gallery');
			}
			else{
			}

		//$('.add__fileinput-new').on('click', addTemplateClose)
		$('.add__fileinput-new').on('click', function(e){
			$('.upload__close').show();
	        $('.upload__name').prop('disabled', false);
	        addTemplateClose();
		})

		$('.upload__close').on('click', function(e) {
	        $(this).parents('.upload').fadeOut('slow', function(){
	            $(this).remove()
	            e.preventDefault();
	        })
	        e.preventDefault();
	    })
	}

	// Validando formato de imagen
	$(".upload__validate").change(function() {
	    var val = $(this).val();

	    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
	        case 'gif':
	        case 'jpg':
	        case 'png':
	        	$('.upload__close').show();
	        	$('.upload__name').prop('disabled', false);
	        	addTemplateClose();
	            break;
	        default:
	            $(this).val('');
	            // error message here
	            // alert("not an image");
	            $('.upload__text').text('Formato incorrecto');
	    };
	});

	// Contador
	var indice = 0;

// soundcloud
	// validacion de musica
	function validateSoundcloud(url) {
		var p = /<iframe[^>]*src="https:\/\/w.soundcloud.com\/player\/[^"]+">\s*<\/iframe>/;;
    	return (url.match(p)) ? RegExp.$1 : false;
	}

	// Generar otro contenedor al llenar los campos
	$("body").on("input", ".soundcloud", function(){
		var url = $(this).val();
		indice ++;

    	if (validateSoundcloud(url) !== false) {
        	$(this).parents('.uploadSonido').find('.imgSoundcloud').addClass('fieldok');
        	
        	$(this).parents('.uploadSonido').find('.imgSoundcloud').html('<iframe width="100%" height="auto" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+url.substr(144,11)+'&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>');
        	
        	$(this).parents('.uploadSonido').after('<div class="col-sm-12 uploadSonido" style="background:white; padding-top: 3%; padding-bottom: 3%; margin-top: 3%"><div id="resultado'+indice+'" class="col-lg-3"><div class="album__image--soundcloud imgSoundcloud"></div></div><div class="col-lg-9"><div class="row"><div class="col-lg-12" style="margin-top: 3.5%"><textarea type="url" name="sonidoSoundcloud" id="soundcloud" class="formulario form-control soundcloud" cols="30" rows="5"></textarea></div></div></div></div>');
    	} else {
        	$(this).parents('.uploadSonido').find('.imgSoundcloud').removeClass('fieldok');
    	}
	});

// youtube
	// validacion de video
	function validateYoutube(url) {
    	var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
    	return (url.match(p)) ? RegExp.$1 : false;
	}
	
	// Generar otro contenedor al llenar los campos
	$("body").on("input", ".youtube", function(){

		var url = $(this).val();
		indice ++;

    	if (validateYoutube(url) !== false) {
        	$(this).parents('.uploadVideo').find('.imgYoutube').addClass('fieldok');
        	
        	$(this).parents('.uploadVideo').find('.imgYoutube').html('<img src="http://img.youtube.com/vi/'+url.substr(32,11)+'/0.jpg" class="img-responsive">');
        	
        	$(this).parents('.uploadVideo').after('<div class="col-sm-12 uploadVideo" id="newYoutube" style="background:white; padding-top: 3%; padding-bottom: 3%; margin-top: 3%"><div id="resultado'+indice+'" class="col-lg-3"><div class="album__image--youtube imgYoutube"></div></div><div class="col-lg-9"><div class="row"><div class="col-lg-12" style="margin-top: 2.3%"><input type="text" id="nombre2" name="videoYoutube" class="form-control upload__name" placeholder="Agregale título del album"></div></div><div class="row"><div class="col-lg-12" style="margin-top: 3%"><input type="url" name="compra'+indice+'" id="youtube" class="formulario form-control youtube" placeholder="Agregar url de youtube"></div></div></div></div>');
    	} else {
        	$(this).parents('.uploadVideo').find('.imgYoutube').removeClass('fieldok');
    	}
	});


})();