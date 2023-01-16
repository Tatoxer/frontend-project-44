install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	bin/brain-games.js

lint:
	npx eslint
