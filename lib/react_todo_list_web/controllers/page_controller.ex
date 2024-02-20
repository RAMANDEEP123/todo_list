defmodule ReactTodoListWeb.PageController do
  use ReactTodoListWeb, :controller
  alias ReactTodoList.Todo

  def index(conn, %{"user_id" => user_id}) do
    tasks = Todo.list_tasks(user_id)
    render(conn, "index.html", tasks: tasks)
  end

  def get_users(conn, _params) do
    users = Todo.list_users()
    render(conn, "index.html", props: Poison.encode!(%{users: users}))
  end
end
