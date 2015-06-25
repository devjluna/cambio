(function() {
	// Reseteando mdales al cargar
	$('#modalReport, #modalContact').on('hidden.bs.modal', function() {
	    $('#reportForm').formValidation('resetForm', true);
	    $('#contactForm').formValidation('resetForm', true);
	});

	// Validation Report Form
	$('#reportForm').formValidation({
		framework: 'bootstrap',
		excluded: ':disabled',
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu nombre'
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu correo'
					},
					emailAddress: {
                        message: 'Por favor ingresa un formato válido'
                    }
				}
			},
			livelihood: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu sustento'
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

	// Validation Contact Form
	$('#contactForm').formValidation({
		framework: 'bootstrap',
		excluded: ':disabled',
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu nombre'
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu correo'
					},
					emailAddress: {
                        message: 'Por favor ingresa un formato válido'
                    }
				}
			},
			phone: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu teléfono'
					},
					stringLength: {
                        min: 8,
                        max: 9,
                        message: 'Por favor ingrese un número válido'
					},
					integer: {
                        message: 'Por favor ingrese un formato válido'
                    }
				}
			},
			comment: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa un comentario'
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

})();