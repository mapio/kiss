# Keep It Secret Stupid

The aim of this hack is to generate a selfcontained HTML page able to store
a secret, that is, an encrypted text.

In order to use this, you first need to get the [Stanford Javascript Crypto Library](http://bitwiseshiftleft.github.io/sjcl/) and embed it in the `kiss` script; to this aim just run the `make` command.

Once the `kiss` command has been generated, given a `plain.txt` file, you can obtain an HTML encrypted version of it as

    ./kiss plain.txt password > cipher.html

In order to not save the password in the history, you can use the option '-p' which prompts for a password

    ./kiss plain.txt -p > cipher.html
	Password: ********

If you now open `cipher.html` in a (modern) web browser and type `password` in the form field, you'll get back your `plain.txt` file (in a `pre` element).

If you want to decrypt it you can use the `unkiss` command.

    ./unkiss cipher.html password > plain.txt
