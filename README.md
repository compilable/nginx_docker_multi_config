## Nginx server - Multiple endpoint configuration.

Docker Compose solution file to host multiple continers with a bridge and shared volume.

### build each docker.
sudo docker-compose up --build


### remove all local images
sudo docker rm -vf $(sudo docker ps -aq)

### inspect network interface:
sudo docker inspect ngin_mult_config_nginx_mulit_config


### connect to container:
sudo docker exec -it XXXXX sh

### run curl inside the container:
apk add curl
curl http://auth_server:5002/