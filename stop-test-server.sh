#!/bin/sh
# dockerのコンテナを停止、削除後、imageを削除する

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)