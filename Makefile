SHELL := /bin/sh

setup:
	npm install

lint:
	npm run lint

test:
	npm run test

run:
	npm run dev

.PHONY: setup lint test run
