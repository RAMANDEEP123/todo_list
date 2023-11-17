#!/bin/bash
set -e

# Extract the Docker image from the tar file
docker load -i /app/goal_tracker_final_project_img.tar

# Run the Docker container
docker run -d -p 4000:4000 --name container-name goal_tracker_final_project_img:latest

# Wait for the container to start (adjust the sleep duration as needed)
sleep 10

# Check the running containers
docker ps

# Optionally, you can run other commands here, such as database migrations
# Example:
# docker exec -it your-container-name mix ecto.migrate