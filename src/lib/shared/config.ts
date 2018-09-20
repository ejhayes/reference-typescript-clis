import {LogLevels} from "./enums";

/**
 * Configuration shared by the code.
 */
let config = {
	/**
	 * Colorize output
	 */
	colorize: process.env.COLORIZE == "true" || false,
	/**
	 * Label that will be prepended to any logs that are output.
	 */
	logLabel: process.env.LOG_LABEL || 'some-cli',
	/**
	 * Verbosity level of logging.
	 */
	logLevel: process.env.LOG_LEVEL || LogLevels.info
};

export {config};