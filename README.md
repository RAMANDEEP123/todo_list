# Todo List
A simple to-do list manager application that allows users to create, read, update,
and delete (CRUD) tasks.

# clone project
git clone https://github.com/RAMANDEEP123/todo_list.git

# Prerequisites
Install Elixir and Erlang using ASDF: to install and manage versions of Elixir and Erlang using the below commands –

git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.2

**Download erlang plugin and install -**
asdf plugin-add erlang https://github.com/asdf-vm/asdf-erlang.git

asdf install erlang 25.2.3

**Download elixir plugin and install -**
asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git

asdf install elixir 1.14.3-otp-25

**Set elixir and erlang versions as global –**
asdf global erlang 25.2.3

asdf global elixir 1.14.3-otp-25 

**Install PostgreSQL: You can install PostgreSQL using the following command -:**
sudo apt install postgresql

Install React for the front end

# Fetch dependencies:

Run below commands to setup dependencies and compile –

cd todo_list

mix deps.get

mix compile

# Run the project

mix phx.server

# Run the test cases

mix test test/react_todo_list/todo_test.exs
