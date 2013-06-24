
build: components index.js angularjs-component-pageFadeIn.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
