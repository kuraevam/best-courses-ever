DOCKER_COMPOSE = docker compose -f docker-compose.yml

init:
	${DOCKER_COMPOSE} down
	${DOCKER_COMPOSE} up --build
