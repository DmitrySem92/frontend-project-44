install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

lint:
	npx eslint .

brain-calc:
	node src/index.js brainCalc

brain-gcd:
	./bin/brain-gcd.js

brain-progression:
	./bin/brain-progression.js

brain-prime:
	./bin/brain-prime.js

