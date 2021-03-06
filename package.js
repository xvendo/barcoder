Package.describe({
  name: 'xvendo:barcoder',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Easily generate barcodes',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xvendo/barcoder.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['templating','underscore','jquery','ui'],'client');
  api.addFiles([
   'src/ean13.min.js',
   'xvendo_barcoder.html',
   'xvendo_barcoder.js'   
	 ],'client'
  );  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('xvendo:barcoder');
  api.addFiles('xvendo_barcoder_test.js');
});
