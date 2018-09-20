# some-cli
This is a little blurb about what this does.

## quickstart

    yarn
    yarn cli --help
    COLORIZE=true LOG_LEVEL=debug yarn cli --req-arg testing

*NOTE*: to debug anything you can simply run with `yarn cli:debug ...`

## configuration
Configuration is located in `.env` files. This is fine for local development, but should not be used for production secrets.

## other useful commands

### testing

Tests are setup with mocha, sinon, chai, and chai-as-promised. To run the tests:

	yarn test
	yarn test:debug

*NOTE*: to run a single test, you'll need to add a `.only` flag to the individual tests or describe blocks. For example:

```
describe.only("something...", () => {
	// your tests here
})
```