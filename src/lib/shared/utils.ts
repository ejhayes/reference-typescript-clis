import {config} from "./config";
import {SomeError} from "./errors";
import {LogLevels} from "./enums";
import * as colors from "colors";
import {createLogger, format, transports, Logger} from "winston";
import {ConsoleTransportOptions} from "winston/lib/winston/transports";

let { combine, timestamp, label, printf } = format;

const configureLogger = function(useLabel, logLevel) : Logger {
    const myFormat = printf(info => {
        return `${info.timestamp} [${info.label}] [${info.level}]: ${info.message}`;
    });

    // without this the colorized output winds up getting
    // written to the log output...even if there is no TTY
    if (config.colorize == true) {
    	colors.enable();
    }
    else {
    	colors.disable();
    }

    const logger = createLogger({
        level: logLevel,
        format: combine(
            label({ label: useLabel }),
            timestamp(),
            format.colorize({message: true}),
            myFormat
        ),
        transports: [new transports.Console()]
    });

    return logger;
};

const log = configureLogger(config.logLabel, config.logLevel);

export {log}