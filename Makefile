.PHONY: docker-build

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