/**
 * Documentation for SomeError
 */
export class SomeError extends Error implements Error {
	[Symbol.toStringTag]: string = "SomeError";

	constructor(message: string) {
		super(message);
		Error.captureStackTrace(this,SomeError);
		this.name = new.target.prototype.constructor.name;
	}
}