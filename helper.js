var chalk = require('chalk')

module.exports = {
	assert: function assert(t, msg) {
		// If assertion is truthy, PASS else FAIL
		var res = !!t ? chalk.green('PASS') : chalk.red('FAIL')

		return console.log(res + ' ' + msg)
	},
	error: function error(msg) {
		return console.log(chalk.red('ERROR') + ' ' + msg)
	},
	log: function log() {
		return console.log(Array.prototype.slice.call(arguments).join(' '))
	}
}
