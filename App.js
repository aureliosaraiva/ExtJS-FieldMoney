Ext.onReady(function() {

Ext.create('Ext.form.Panel', {
		width : 550,
		height : 350,
		renderTo : 'container',
		title : 'Formulário de exemplo',
			bodyPadding : 10,
			items : [ {
				labelAlign : 'top',
				anchor : '100%',
				xtype : 'field-money',
				allowBlank : false,
				showSymbol : true,
								symbolStay : true,

				fieldLabel : 'Exemplo 1'
			}, {
				labelAlign : 'top',
				anchor : '100%',

				xtype : 'field-money',
				showSymbol : true,
				symbol : 'R$ ',
				thousands : '.',
				decimal : ',',
				precision : 2,
				symbolStay : true,
				fieldLabel : 'Exemplo 5'
			}]
		})


});
