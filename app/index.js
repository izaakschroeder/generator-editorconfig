var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({

	initializing: util.defaults(function() {

	}),

	prompting: function () {

	},

	writing: {
		editorconfig: util.copy('~.editorconfig', 'default.ini')
	},

	end: {
		editorconfig: util.open('~.editorconfig')
	}
});
