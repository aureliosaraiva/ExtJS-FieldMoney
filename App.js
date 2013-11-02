Ext.onReady(function() {

	var win = Ext.create('Ext.window.Window', {
		modal : true,
		width : 550,

		height : 450,
		title : 'Formulário',
		layout : 'fit',
		items : Ext.create('Ext.form.Panel', {
			border : false,
			bodyPadding : 10,
			items : [ {
				labelAlign : 'top',
				anchor : '100%',
				xtype : 'field-money',
				allowBlank : false,
				fieldLabel : 'Exemplo 1'
			}, {
				labelAlign : 'top',
				anchor : '100%',
				xtype : 'field-money',
				showSymbol : true,
				fieldLabel : 'Exemplo 2'
			}, {
				labelAlign : 'top',
				anchor : '100%',

				xtype : 'field-money',
				showSymbol : true,
				symbol : 'R$ ',
				thousands : '.',
				decimal : ',',
				fieldLabel : 'Exemplo 3'
			}, {
				labelAlign : 'top',
				anchor : '100%',

				xtype : 'field-money',
				showSymbol : true,
				symbol : 'R$ ',
				thousands : '.',
				decimal : ',',
				precision : 4,
				fieldLabel : 'Exemplo 4'
			}, {
				labelAlign : 'top',
				anchor : '100%',

				xtype : 'field-money',
				showSymbol : true,
				symbol : 'R$ ',
				thousands : '.',
				decimal : ',',
				precision : 4,
				symbolStay : true,
				fieldLabel : 'Exemplo 5'
			}, {
				labelAlign : 'top',
				anchor : '100%',

				xtype : 'field-money',
				showSymbol : true,
				symbol : 'R$ ',
				thousands : '.',
				decimal : ',',
				precision : 4,
				
				defaultZero : false,
				symbolStay : true,
				fieldLabel : 'Exemplo 6'
			}, 
			{
				labelAlign : 'top',
				anchor : '100%',
				xtype : 'field-money',
				allowBlank : false,
				fieldLabel : 'Exemplo 7',
				allowNegative: true
			},
			{
				xtype : 'fieldset',
				html : 'Os valores dos campos são submetidos no formato double.'
			} ]
		})
	});

	win.show();
	win.center();

});