#!/bin/bash

ACCOUNT=013199041920
DOCKER_CONTAINER=my-batch-job
REPO=${ACCOUNT}.dkr.ecr.us-west-2.amazonaws.com/${DOCKER_CONTAINER}
TAG=build-$(date -u "+%Y-%m-%d")

echo "Building Docker Image..."
docker build -t $DOCKER_CONTAINER .

echo "Authenticating against AWS ECR..."
echo $(aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 013199041920.dkr.ecr.us-west-2.amazonaws.com)

echo "Tagging ${REPO}..."
docker tag $DOCKER_CONTAINER:latest $REPO:$TAG
docker tag $DOCKER_CONTAINER:latest $REPO:latest

echo "Deploying to AWS ECR"
docker push $REPO


