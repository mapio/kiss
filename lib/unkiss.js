#!/usr/bin/env node

var fs = require( 'fs' );
var vm = require( 'vm' );

var sjcl_json = @@@sjcl_json@@@;


try {
	vm.runInThisContext( sjcl_json );
} catch ( e ) {
	throw e;
}

if ( process.argv.length != 4 ) {

	console.log( 'unkiss: usage: unkiss <FILE> <PASSWROD>' )

} else {

	var plaintext = fs.readFileSync( process.argv[ 2 ] ).toString();
	var data = plaintext.match(/var\s+data\s*=\s*"(.*)";/)[1].replace(/\\/g, "");
	var password = process.argv[ 3 ];

	var unciphertext_json = sjcl.decrypt( password, data );

	console.log(unciphertext_json);

}
