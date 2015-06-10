var generators = require('yeoman-generator');
var open = require('open');

module.exports = generators.Base.extend({
	initializing: function() {

	},

	prompting: function () {

	},

	writing: function() {

		// TODO: Auto detect what languages are being used and add the rules
		// for those languages.

		this.fs.copyTpl(
			this.templatePath('default.ini'),
			this.destinationPath('.editorconfig'),
			{
			}
		);
	},

	end: function() {
		open(this.destinationPath('.editorconfig'));
	}
});
