
#############################
# Docker Machines
#############################

up:
	docker-compose up -d

stop:
	docker-compose stop

state:
	docker-compose ps

rebuild:
	docker-compose stop
	docker-compose rm --force app
	docker-compose build --no-cache
	docker-compose up -d

composer:
	docker-compose exec -i api composer

# Remove dangling images
purge:
	sudo docker rmi $(sudo docker images -f "dangling=true" -q)
