/*
	Sparkphase Reporter Version 0.1.0
	Updated: Friday 17th October 2014
	Author: Jonathan Bristow <jonathanbristow@me.com>
	Repository: https://github.com/JonathanBristow/sparkphase-reporter
*/

//var Stream = require('logrotate-stream'),
//	toLogFile = Stream({ file: './test.log', size: '100k', keep: 3 });


module.exports = function Reporter(Options) {
	console.log(Options.Type+' => '+Options.Group+' => '+Options.Message);	
	if (Options.Detail) {
		console.log('Detail:', Options.Detail);
	}
	if (Options.Exit) {
		console.log('This error has caused the application to exit.');
		process.exit();
	}
}