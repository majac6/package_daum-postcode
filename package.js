Package.describe({
  name: 'majac:daum-postcode',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'korea address finder - daum APIs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/majac6/package_daum-postcode.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.use('jquery', 'client');
    api.addFiles('lib/postcode.v2.js', 'client');
    api.addFiles('lib/function.js', 'client');
});