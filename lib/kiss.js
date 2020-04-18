#!/usr/bin/env node

var fs = require( 'fs' );
var rls = require('readline-sync');
var vm = require( 'vm' );

var sjcl_json = @@@sjcl_json@@@;

var html_json = @@@html_json@@@;

try {
	vm.runInThisContext( sjcl_json );
} catch ( e ) {
	throw e;
}

if ( process.argv.length < 4 ) {

	console.log( 'kiss: usage: kiss <FILE> <PASSWORD | -p> [-s ./script0.js,http://example.com/script1.js,...]\n\n\tParameters (<mandatory> and [optional]) must be used in the specified order.\n\n\t-p option prompts for a password (more safe)\n\t-s option allows to specify a list of comma separated js files to be included in the head' )

} else {

	var plaintext = fs.readFileSync( process.argv[ 2 ] ).toString();
	var password = process.argv[ 3 ] != '-p' ? process.argv[ 3 ] : rls.question( 'Password: ', { hideEchoBack: true } );

	var ciphertext_json = JSON.stringify( sjcl.encrypt( password, plaintext, { 'iter': 1000, 'ts': 128, 'ks': 256, 'cipher': 'aes' } ) );

	/* Include eventual additional scripts */
	var additional_scripts = "";
	if( process.argv.length == 6 && process.argv[4] == '-s' ){
		var scripts = process.argv[ 5 ].split(',');
		scripts.forEach( script => additional_scripts += '<script src="' + script + '"></script>\n\t' );
	}

	console.log( html_json.replace( /@@@sjcl@@@/, sjcl_json ).replace( /@@@data@@@/, ciphertext_json ).replace(/@@@additional_scripts@@@/, additional_scripts ) );

}
