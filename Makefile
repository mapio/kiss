.PHONY: clean deepclean

kiss: ./lib/sjcl.js ./lib/kiss.html ./lib/kiss.js
	./lib/make_kiss && chmod u+x ./kiss

unkiss: ./lib/sjcl.js ./lib/unkiss.js
	./lib/make_unkiss && chmod u+x ./unkiss

./lib/sjcl.js:
	./lib/get_sjcl

clean:
	rm -f ./kiss ./unkiss

deepclean: clean
	rm -f ./lib/sjcl.js

