build:
	docker-compose build server

run: build
	docker-compose up server

migrate: build
	docker-compose up migrate