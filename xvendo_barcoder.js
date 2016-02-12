Template.xvendo_barcoder.onRendered(function() {	
	
	// Get Template data values
	var dataId = Template.instance().data.id;
	var dataEan = Template.instance().data.ean;		
	var element = document.getElementById(dataId);
	// Generate EAN Canvas	
	new EAN13(element,dataEan);

});
