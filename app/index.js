var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    editorconfig: util.copy('.editorconfig', 'default.ini')
  }
});
