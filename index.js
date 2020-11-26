const {Plugin} = require('powercord/entities');


module.exports = class shake extends Plugin {
	startPlugin() {

		powercord.api.commands.registerCommand({
			command: 'shake',
			description: 'Shakes your screen',
			usage: '{c} <time in seconds>',
			executor: async (args) => {
				this.generateShake(args);
				return;
			},

			autocomplete: (args) => {
				if (args[1] === void 0) {
					return {
						commands: [{
							command: "Enter how long you want the screen to shake for",
							instruction: true,
						}, ],
					};
				}

			}

		});

	}
	pluginWillUnload() {
		powercord.api.commands.unregisterCommand('shake');
	}







	generateShake(args) {
		if (args.length === 0) return require('powercord/webpack').getModule(['ComponentDispatch'], false).ComponentDispatch.dispatch('SHAKE_APP', {
			duration: 200,
			intensity: 2
		})
		//thanks to Juby210 for helping me find this module
		require('powercord/webpack').getModule(['ComponentDispatch'], false).ComponentDispatch.dispatch('SHAKE_APP', {
			duration: args[0] * 1000,
			intensity: 2
		})


	}

};