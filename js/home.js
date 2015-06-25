(function() {
	// Función para obtener modal vertical centrado
	function centerModals(){
		$('.modal').each(function(i){
			var $clone = $(this).clone().css('display', 'block').appendTo('body');
			var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
			top = top > 0 ? top : 0;
			$clone.remove();
			$(this).find('.modal-content').css("margin-top", top);
		});
	}
	$('.modal').on('show.bs.modal', centerModals);
	$(window).on('resize', centerModals);

    // Llamando a plugin para redimensionar imagenes a contenedor
	// $('.album__image').imagefill({runOnce:true});

	var navOffset = $('.menu').offset().top;

	$('.menu').wrap('<div class="nav-placeholder"></div>');
	// $('.nav-placeholder').height($('.menu').outerHeight());

	// $('.menu').wrapInner('<div class="nav-inner"></div>');
	// $('.nav-inner').wrapInner('<div class="nav-inner-most"></div>');

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();

		if(scrollPos >= navOffset) {
			$('.menu').addClass('fixed');
		} else {
			$('.menu').removeClass('fixed');
		}
	});

	// Llamando a opciones del menu editar perfil
	$('.topbar__logged__dropdown').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.topbar__logged').toggleClass('open');
	});

	// Reseteando datos al inicializar modal
	$('#modalLogin').on('hidden.bs.modal', function() {
	    $('#loginForm').formValidation('resetForm', true);
	});

	// Validación login
	$('#loginForm').formValidation({
		framework: 'bootstrap',
		excluded: ':disabled',
		fields: {
			email: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu correo'
					},
					emailAddress: {
						message: 'Por favor ingresa un email valido'	
					}
				}
			},
			pwd: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa una contraseña'
					},
					stringLength: {
                        min: 6,
                        message: 'Por favor ingresa como mínimo 6 caracteres'
                    }
				}
			}
		}
	})
	.on('err.field.fv', function(e, data) {
		// Habiliando botón de envío
		data.fv.disableSubmitButtons(false);
	})
	.on('success.field.fv', function(e, data) {
		// Ocultando la clase de éxito
		var $parent = data.element.parents('.form-group');
		$parent.removeClass('has-success');
		// Habiliando botón de envío
		data.fv.disableSubmitButtons(false);
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
                
            }
        });
    });

	// Validación recuperar contraseña
    $('#resetForm').formValidation({
		framework: 'bootstrap',
		excluded: ':disabled',
		fields: {
			email: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu correo'
					},
					emailAddress: {
						message: 'Por favor ingresa un email valido'	
					}
				}
			}
		}
	})
	.on('err.field.fv', function(e, data) {
		data.fv.disableSubmitButtons(false);
	})
	.on('success.field.fv', function(e, data) {
		var $parent = data.element.parents('.form-group');
		$parent.removeClass('has-success');
		data.fv.disableSubmitButtons(false);
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
                
            }
        });
    });

   	// Validación activar cuenta
    $('#activeAccountForm').formValidation({
		framework: 'bootstrap',
		excluded: ':disabled',
		fields: {
			email: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu correo'
					},
					emailAddress: {
						message: 'Por favor ingresa un email valido'	
					}
				}
			},
			pwd: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa una contraseña'
					},
					stringLength: {
                        min: 6,
                        message: 'Por favor ingresa como mínimo 6 caracteres'
                    }
				}
			}
		}
	})
	.on('err.field.fv', function(e, data) {
		data.fv.disableSubmitButtons(false);
	})
	.on('success.field.fv', function(e, data) {
		var $parent = data.element.parents('.form-group');
		$parent.removeClass('has-success');
		data.fv.disableSubmitButtons(false);
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
                
            }
        });
    });

})();