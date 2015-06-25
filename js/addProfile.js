(function() {
	$('#addProfileForm').formValidation({
		framework: 'bootstrap',
		excluded: ':disabled',
		fields: {
			persontype: {
				validators: {
					notEmpty: {
						message: 'Por favor seleccione una opción'
					}
				}
			},
			profile: {
                validators: {
                    notEmpty: {
                        enabled: false,
                        message: 'Por favor seleccione su perfil'
                    }
                }
            }
		}
	})
	.on('err.validator.fv', function(e, data) {
	    data.element
	        .data('fv.messages')
	        // Eliminando todos los mensajes
	        .find('.help-block[data-fv-for="' + data.field + '"]').hide() // Muestra solo el mensaje asociado con validador actual
	        .filter('[data-fv-validator="' + data.validator + '"]').show();
	})
	.on('success.field.fv', function(e, data) {
		// Removiendo el border-color de la clases success
        var $parent = data.element.parents('.form-group');
        $parent.removeClass('has-success');
    })
    .on('change', '[name="persontype"]', function() {
        if ($('#natural').is(':checked')) {
            $('.naturalperson').show();
            $('#addProfileForm').formValidation('enableFieldValidators', 'profile', true, 'notEmpty');
        } else {
            $('.naturalperson').hide();
            $('#addProfileForm').formValidation('enableFieldValidators', 'profile', false, 'notEmpty');
        }
    });

    // LLamando a fuelux wizard
	$('#addProfileWizard').wizard()
	.on('actionclicked.fu.wizard', function(e, data) {
        var fv = $('#addProfileForm').data('formValidation'),
            step = data.step,
            $container = $('#addProfileForm').find('.step-pane[data-step="' + step +'"]');

        fv.validateContainer($container);

        var isValidStep = fv.isValidContainer($container);
        if (isValidStep === false || isValidStep === null) {
            e.preventDefault();
        }
    })
    .on('finished.fu.wizard', function(e) {
        var fv         = $('#addProfileForm').data('formValidation'),
            step       = $('#addProfileWizard').wizard('selectedItem').step,
            $container = $('#addProfileForm').find('.step-pane[data-step="' + step +'"]');

        fv.validateContainer($container);

        var isValidStep = fv.isValidContainer($container);
        if (isValidStep === true) {
            // fv.defaultSubmit();
            // Aplicar ajax para envío
            alert('Se ingresaron todos los datos correctamente');
        }
    })


})();