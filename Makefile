build:
	docker build -t ${tag} .
clean:
	docker rmi -f ${tag}
run:
	docker run -d -p ${port}:${port} --name ${name} ${tag}
up:
	docker-compose up
down :
	docker-compose down
ls:
	docker ps -l

dev:
	yarn run dev