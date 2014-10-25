/*
	Sparkphase Reporter Version 0.1.0
	Updated: Friday 17th October 2014
	Author: Jonathan Bristow <jonathanbristow@me.com>
	Repository: https://github.com/JonathanBristow/sparkphase-reporter
*/

var Colors = require('colors');

module.exports = function Reporter(Options) {
	var Type = Options.Type;
	switch (Options.Type) {
		case 'Information':
			Type = Options.Type.green;
		break;
		case 'Debug':
			Type = Options.Type.yellow;
		break;
		case 'Error':
			Type = Options.Type.red;
		break;
	}
	console.log(Type+' => '+Options.Group+' => '+Options.Message);	
	if (Options.Detail) {
		console.log('Detail:', Options.Detail);
	}
	if (Options.Exit) {
		console.log('This error has caused the application to exit.');
		process.exit();
	}
}