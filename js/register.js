(function() {
	var $btn = $('.btn--red--degraded');

	$('#registerForm').formValidation({
		framework: 'bootstrap',
		excluded: ':disabled',
		fields: {
			// validacion natural
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
			pwd: {
				validators: {
                	identical: {
                    	field: 'confirmpwd',
                    	message: 'Confirma tu contraseña'
                	},
                	stringLength: {
                        min:6,
                        message: 'Por favor ingresa como mínimo 6 caracteres'
                    }
            	}
			},
			confirmpwd: {
				validators: {
                	identical: {
                    	field: 'pwd',
                    	message: 'La contraseña no es la misma'
                	}
            	}
			},
			persontype: {
				row: '.form-group',
				validators: {
					notEmpty: {
						message: 'Por favor selecciona tu tipo de persona'
					}
				}
			},
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
			sex: {
				row: '.form-group',
				validators: {
					notEmpty: {
						message: 'Por favor selecciona tu sexo'
					}
				}
			},
			department: {
				validators: {
					notEmpty: {
						message: 'Por favor selecciona tu departamento'
					}
				}
			},
			province: {
				validators: {
					notEmpty: {
						message: 'Por favor selecciona tu provincia'
					}
				}
			},
			district: {
				validators: {
					notEmpty: {
						message: 'Por favor selecciona tu distrito'
					}
				}
			},
			phone: {
				validators: {
					notEmpty: {
						message: 'Por favor ingresa tu número de teléfono'
					},
					stringLength: {
                        min: 7,
                        max: 7,
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

			// validacion legal
			
			lreason: {
				enabled: false,
			 	validators: {
                     notEmpty: {
                        message: 'Por favor ingrese su razón social'
                     }
                 }
			},

			lruc: {
				enabled: false,
			 	validators: {
                     notEmpty: {
                        message: 'Por favor ingrese su ruc'
                     }
                 }
			},
			lyear_start: {
				enabled: false,
			 	validators: {
                     notEmpty: {
                        message: 'Por favor ingrese el año de creación'
                     }
                 }
			},
			laddress: {
				enabled: false,
			 	validators: {
                     notEmpty: {
                        message: 'Por favor ingrese una dirección'
                     }
                 }
			},
			lphone: {
				enabled: false,
			 	validators: {
                     notEmpty: {
                        message: 'Por favor ingrese número teléfono'
                     }
                 }
			},
			lmobile: {
				enabled: false,
			 	validators: {
                     notEmpty: {
                        message: 'Por favor ingrese número celular'
                     }
                 }
			},
			lemail: {
				enabled: false,
			 	validators: {
                     notEmpty: {
                        message: 'Por favor ingrese email'
                     }
                 }
			},
			// laddressb: {
			// 	enabled: false,
			// 	validators: {
   //                  notEmpty: {
   //                      message: 'Por favor ingrese su dirección comercial'
   //                  }
   //              }
			// },
			// laddressl: {
			// 	enabled: false,
			// 	validators: {
   //                  notEmpty: {
   //                      message: 'Por favor ingrese su dirección legal'
   //                  }
   //              }
			// },
			// lfullname: {
			// 	enabled: false,
			// 	validators: {
   //                  notEmpty: {
   //                      message: 'Por favor ingrese sus nombres completos'
   //                  }
   //              }
			// },
			// lidentity: {
			// 	enabled: false,
			// 	validators: {
   //                  notEmpty: {
   //                      message: 'Por favor seleccione documento de identidad'
   //                  }
   //              }
			// },
			// lidentitynumber: {
			// 	enabled: false,
			// 	validators: {
   //                  notEmpty: {
   //                      message: 'Por favor ingrese número de documento'
   //                  }
   //              }
			// },
//			profile: {
//                validators: {
//                    notEmpty: {
//                        message: 'Por favor seleccione su perfil'
//                    }
//                }
//            },
            //lreason: {
			//	enabled: false,
			//	validators: {
            //        notEmpty: {
            //            message: 'Por favor ingrese su razón social'
            //        }
            //    }
			//},
			//nameartist: {
			//	validators: {
			//		notEmpty: {
			//			message: 'Por favor ingresa tu nombre artístico'
			//		}
			//	}
			//},
			//aboutme: {
			//	validators: {
			//		notEmpty: {
			//			message: 'Por favor ingresa un resumen acerca de tí'
			//		}
			//	}
			//},
			//specialty: {
			//	validators: {
			//		notEmpty: {
			//			message: 'Por favor selecciona tu especialidad'
			//		}
			//	}
			//},
			//information: {
			//	validators: {
			//		notEmpty: {
			//			message: 'Por favor ingresa tu respuesta'
			//		}
			//	}
			//},
			//startdate: {
			//	validators: {
			//		notEmpty: {
			//			message: 'Por favor selecciona año de inicio'
			//		}
			//	}
			//},
			//genre: {
			//	validators: {
			//		notEmpty: {
			//			message: 'Por favor selecciona tu género'
			//		}
			//	}
			//}
		}
	})
	.on('err.validator.fv', function(e, data) {
	    data.element
	        .data('fv.messages')
	        // Eliminando todos los mensajes
	        .find('.help-block[data-fv-for="' + data.field + '"]').hide()
	        // Muestra solo el mensaje asociado con validador actual
	        .filter('[data-fv-validator="' + data.validator + '"]').show();
	})
	.on('success.field.fv', function(e, data) {
		// Removiendo el border-color de la clases success
        var $parent = data.element.parents('.form-group');
        $parent.removeClass('has-success');
    })

    //.on('change', '[name="persontype"]', function() {
    //    var personVal = $('#registerForm').find('[name="persontype"]:checked').val();
    //    var naturalContent = $('.naturalperson');
    //	var legalContent = $('.legalperson');

    //	if (personVal == 'legal') {
	//		$('#registerForm')
    //    		.formValidation.enableFieldValidators('lreason', true)
    //                .enableFieldValidators('lruc', true)
    //                .enableFieldValidators('lyear_start', true)
    //                .enableFieldValidators('laddress', true)
    //                .enableFieldValidators('lphone', true)
    //                .enableFieldValidators('lmobile', true)
    //                .enableFieldValidators('lemail', true);
    //});

    .on('change', '[name="persontype"]', function() {
    	var personVal = $('#registerForm').find('[name="persontype"]:checked').val();
    	var naturalContent = $('.naturalperson');
    	var legalContent = $('.legalperson');

    	if (personVal == 'legal') {
			$('#registerForm')
				.formValidation('enableFieldValidators', 'lreason', true)
				.formValidation('enableFieldValidators', 'lruc', true)
				.formValidation('enableFieldValidators', 'lyear_start', true)
				.formValidation('enableFieldValidators', 'laddress', true)
				.formValidation('enableFieldValidators', 'lphone', true)
				.formValidation('enableFieldValidators', 'lmobile', true)
				.formValidation('enableFieldValidators', 'lemail',notEmpty , false)

			// Fin natural sin requerimientos
			naturalContent.show();
			legalContent.hide();


    		$('.register-form__title--change').text('Ingresa datos personales de quien registra');

    	} else if (personVal == 'natural') {
    		$('.register-form__title--change').text('Ingresa tus datos personales');
    		naturalContent.show();
			legalContent.hide();
    	}

  //    if ($('#natural').is(':checked')) {
		// 	$('.naturalperson').show();
		// 	$('#registerForm').formValidation('enableFieldValidators', 'profile', true);
		// } else {
		// 	$('.naturalperson').hide();
		// 	$('#registerForm').formValidation('enableFieldValidators', 'profile', false);
		// }
		// if ($('#legal').is(':checked')) {
		// 	$('.legalperson').show();
		// 	$('.register-form__title--change').text('Ingresa datos personales de quien registra');
		// 	$('#registerForm').formValidation('enableFieldValidators', 'lreason', true)
		// 					.formValidation('enableFieldValidators', 'lruc',notEmpty, true)
		// 					.formValidation('enableFieldValidators', 'laddressb', true)
		// 					.formValidation('enableFieldValidators', 'laddressl', true)
		// 					.formValidation('enableFieldValidators', 'lfullname', true)
		// 					.formValidation('enableFieldValidators', 'lidentity', true)
		// 					.formValidation('enableFieldValidators', 'lidentitynumber', true);
		// } else {
		// 	$('.legalperson').hide();
		// 	$('.register-form__title--change').text('Ingresa tus datos personales');
		// }
    });

	$('#registerWizard')
        // Call the wizard plugin
        .wizard()

        // Triggered when clicking the Next/Prev buttons
        .on('actionclicked.fu.wizard', function(e, data) {
            var fv         = $('#registerForm').data('formValidation'), // FormValidation instance
                step       = data.step,                              // Current step
                // The current step container
                $container = $('#registerForm').find('.step-pane[data-step="' + step +'"]');

            // Validate the container
            fv.validateContainer($container);

            var isValidStep = fv.isValidContainer($container);
            if (isValidStep === false || isValidStep === null) {
                // Do not jump to the target panel
                e.preventDefault();
            }
        })

        // Triggered when clicking the Complete button
        .on('finished.fu.wizard', function(e) {
            var fv         = $('#registerForm').data('formValidation'),
                step       = $('#registerWizard').wizard('selectedItem').step,
                $container = $('#registerForm').find('.step-pane[data-step="' + step +'"]');

            // Validate the last step container
            fv.validateContainer($container);

            var isValidStep = fv.isValidContainer($container);
            if (isValidStep === true) {
                // Uncomment the following line to submit the form using the defaultSubmit() method
                // fv.defaultSubmit();

                // For testing purpose
                $('#thankModal').modal();
            }
        });

	// INICIO DE VALIDACION NO BORRAR

	//.on('actionclicked.fu.wizard', function(e, data) {
    //    var fv = $('#registerForm').data('formValidation'),
    //        step = data.step,
    //        $container = $('#registerForm').find('.step-pane[data-step="' + step +'"]');

    //    fv.validateContainer($container);

    //	var isValidStep = fv.isValidContainer($container);
    //	if (isValidStep === false || isValidStep === null) {
    //        e.preventDefault();
    //    }
    //})
    //.on('finished.fu.wizard', function(e) {
    //    var fv         = $('#registerForm').data('formValidation'),
    //        step       = $('#registerWizard').wizard('selectedItem').step,
    //        $container = $('#registerForm').find('.step-pane[data-step="' + step +'"]');

    //    fv.validateContainer($container);

    //    var isValidStep = fv.isValidContainer($container);
    //    if (isValidStep === true) {
            // fv.defaultSubmit();
            // Aplicar ajax para envío
    //        alert('Se ingresaron todos los datos correctamente');
    //    }
    //})

	// FIN DE VALIDACION NO BORRAR

    $('#natural, #legal').on('change', function() {
		if (this.id == 'natural') {
			$('.naturalperson').show();
			$('#registerForm').formValidation('validateField', 'profile');
		} else {
	 		$('.naturalperson').hide();
		}
		if (this.id == 'legal') {
			$('.legalperson').show();
			$('.register-form__title--change').text('Ingresa datos personales de quien registra');
		} else {
			$('.legalperson').hide();
			$('.register-form__title--change').text('Ingresa tus datos personales');
		}
		
		if ($('#natural').is(':checked')) {
	 		$('.naturalperson').show();
			$('#registerForm').formValidation('validateField', 'profile');
		} else {
			$('.naturalperson').hide();
		}
		if ($('#legal').is(':checked')) {
			$('.legalperson').show();
			$('.register-form__title--change').text('Ingresa datos personales de quien registra');
		} else {
			$('.legalperson').hide();
			$('.register-form__title--change').text('Ingresa tus datos personales');
		}
	});
})();