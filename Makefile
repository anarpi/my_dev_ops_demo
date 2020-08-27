.PHONY: docker-build

include .env

VARS:=$(shell sed -ne 's/ *\#.*$$//; /./ s/=.*$$// p' .env )

test:
	echo VARS

tag ?= latest
docker-build:
	echo 'Build docker image'
	docker build --tag anarpi/matrixes:${tag} .

tag ?= latest
docker-push:
	echo 'Push docker image'
	docker push anarpi/matrixes:${tag}

deploy-generator:
	echo 'Deploy generator'
	oc apply -f ./GeneratorService/generator.yaml