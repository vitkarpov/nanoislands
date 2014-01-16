NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

all: node_modules demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js unittests/tests.yate.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js > $@

demo/demo.yate.js: $(shell find . -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/demo/nanoislands.yate > $@

unittests/tests.yate.js: $(shell find $(CURDIR)/unittests -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/unittests/tests.yate > $@

nanoislands.ie.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js ie > $@

nanoislands.js: $(CURDIR)/blocks/nanoislands.js $(shell find $(CURDIR)/blocks -name '*.js') node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=yes --output=nanoislands.js

node_modules:
	npm install

publish:
	rm -rf node_modules
	make clean
	npm test
	npm publish

grunt: node_modules
	$(NPM_BIN)/grunt

clean:
	rm -rf demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js unittests/tests.yate.js grunt

.PHONY: all publish clean
