import 'source-map-support/register';
import {log} from "./lib/shared/utils";
import {config} from "./lib/shared/config";

/**
 * Does some cool thing
 * @param someArg Some argument specifying XYZ
 * @return result of some cool thing
 */
export function doSomething(someArg : string): Promise<string> {
	log.debug('a debug message');
	return Promise.resolve(`Got Arg: ${someArg}`);
}
