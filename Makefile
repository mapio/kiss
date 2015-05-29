.PHONY: clean deepclean

kiss: ./lib/sjcl.js ./lib/kiss.html ./lib/kiss.js
	./lib/make_kiss && chmod u+x ./kiss

./lib/sjcl.js:
	./lib/get_sjcl

clean:
	rm -f ./kiss

deepclean: clean
	rm -f ./lib/sjcl.js

