# Use an official Elixir runtime as a parent image
FROM elixir:1.14.3

# Set the working directory in the container
WORKDIR /app

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y nodejs npm

# Install Phoenix dependencies
RUN mix local.hex --force && \
    mix local.rebar --force

# Copy the Elixir project files
COPY . /app/

# Set up the Phoenix application
WORKDIR /app

# Install and compile dependencies
RUN mix deps.get --only dev && \
    mix compile

# Set up the Node.js project
WORKDIR /app/assets/js/react

# Install Node.js dependencies for React
RUN npm install

# # Build React
# RUN npm run build

# Set up the Elixir application again
WORKDIR /app

# Set the environment to production
ENV MIX_ENV=dev

# Create and migrate the database
RUN mix ecto.create && \
    mix ecto.migrate

# Build the Phoenix application
RUN mix phx.digest

# Expose the Phoenix port
EXPOSE 4000

# Set the default command to run the Phoenix application
CMD ["mix", "phx.server"]
