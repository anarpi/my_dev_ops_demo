.PHONY: build build-generator docker-build

build: build-generator

build-generator:
	echo 'Npm install'
	npm --prefix ./GeneratorService install ./GeneratorService

tag ?= latest
docker-build:
	echo 'Build docker image'
	docker build --tag anarpi/matrixes:${tag} ./GeneratorService

tag ?= latest
docker-push:
	echo 'Push docker image'
	docker push anarpi/matrixes:${tag}

deploy-generator:
	echo 'Deploy generator'
	oc apply -f ./GeneratorService/generator.yaml