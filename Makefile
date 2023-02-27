RENDERER_SOURCE_FILES=$(shell find ../product-configurator-renderer/src -name "*.ts")
RENDERER_TARGET_FILES=$(shell find node_modules/product-configurator-renderer/src -name "*.ts")


.PHONY=install-local-renderer-package

install-local-renderer-package: $(RENDERER_TARGET_FILES)

$(RENDERER_TARGET_FILES): $(RENDERER_SOURCE_FILES)
	npm remove product-configurator-renderer
	cd ../product-configurator-renderer && npm run build
	npm i ../product-configurator-renderer
