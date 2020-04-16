#!/bin/sh

docker build -t test-server .
docker run --name test-server -p 49160:8080 -d test-server