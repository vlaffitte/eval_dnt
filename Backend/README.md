
docker run -d --name mysql_server -e MYSQL_ROOT_PASSWORD=patxWord -e MYSQL_DATABASE=test_db -e MYSQL_USER=api-user -e MYSQL_PASSWORD=patxWord  -p 3306:3306 mysql:5.7

docker build . -t vlaffitte/node-web-app

docker ps

docker run -p 8080:8080 -d vlaffitte/node-web-app

 docker container logs ff2e948c8bdc