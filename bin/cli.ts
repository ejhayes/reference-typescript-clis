#!/usr/bin/env node
import * as program from "commander";
import * as prettyjson from "prettyjson";
import {doSomething} from "../src";
import {log} from "../src/lib/shared/utils";
import {config} from "../src/lib/shared/config";

const pkg = require('../package.json')
const prettyjsonOptions = {};

program
  .version(pkg.version)
  .option('-v, --verbose','enable verbose output') // boolean flag value
  .option('-r, --req-arg <requiredArg>','this is a required arg') // required arg
  .option('-o, --opt-arg [requiredArg]','this is an optional arg','default value') // optional arg

// sub-commands  
/*
program
  .command('get <req> <req2>')
  .description('what this does...')
  .option('-r1, --req-arg1 <requiredArg>','this is a required arg') // required arg
  .option('-o1, --opt-arg1 [requiredArg]','this is an optional arg','default value') // optional arg
  .action(function(req, req2, options){
    // do something...
  });
*/

program.parse(process.argv);
doSomething(program.reqArg)
.then((res) => {
  log.info(res);
});