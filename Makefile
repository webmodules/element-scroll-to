# Get Makefile directory name: http://stackoverflow.com/a/5982798/376773.
# This is a defensive programming approach to ensure that this Makefile
# works even when invoked with the `-C`/`--directory` option.
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

# BIN directory
BIN := $(THIS_DIR)/node_modules/.bin
NODE ?= node
SIX_TO_FIVE ?= $(NODE) $(BIN)/6to5
BROWSERIFY ?= $(NODE) $(BIN)/browserify

ES6_FILES := $(wildcard *.es6)
JS_FILES := $(wildcard *.js)

COMPILED_FILES := $(ES6_FILES:.es6=.js)

build: install $(COMPILED_FILES)

install: node_modules

example: build
	$(BROWSERIFY) index.js -s example -o example.js

clean: $(COMPILED_FILES)
	rm $(COMPILED_FILES)

node_modules:
	npm install

%.js: %.es6
	$(SIX_TO_FIVE) -i coreAliasing $< --out-file $@
