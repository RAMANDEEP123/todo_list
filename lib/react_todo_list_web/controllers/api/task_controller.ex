defmodule ReactTodoListWeb.Api.TaskController do
  use ReactTodoListWeb, :controller

  alias ReactTodoList.Todo
  alias ReactTodoList.Todo.Task
  alias ReactTodoList.Todo.User

  action_fallback ReactTodoListWeb.FallbackController

  def index(conn, _params) do
    tasks = Todo.list_tasks()
    render(conn, "index.json", tasks: tasks)
  end

  def get_tasks(conn, %{"user_id" => user_id}) do
    tasks = Todo.list_tasks(user_id)
    render(conn, "tasks.json", tasks: tasks)
  end

  def get_users(conn, _params) do
    users = Todo.list_users()
    render(conn, "users.json", users: users)
  end
  
  def create_user(conn, %{"user" => task_params}) do
    with {:ok, %User{} = user} <- Todo.create_user(task_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_task_path(conn, :show, user))
      |> render("show_user.json", user: user)
    end
  end

  def create(conn, %{"task" => task_params}) do
    params = %{description: task_params["description"], user_id: String.to_integer(task_params["user_id"])}
    with {:ok, %Task{} = task} <- Todo.create_task(params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_task_path(conn, :show, task))
      |> render("show.json", task: task)
    end
  end

  def show(conn, %{"id" => id}) do
    task = Todo.get_task!(id)
    render(conn, "show.json", task: task)
  end

  def update(conn, %{"id" => id, "task" => task_params}) do
    task = Todo.get_task!(id)

    with {:ok, %Task{} = task} <- Todo.update_task(task, task_params) do
      render(conn, "show.json", task: task)
    end
  end

  def delete(conn, %{"id" => id}) do
    task = Todo.get_task!(id)

    with {:ok, %Task{}} <- Todo.delete_task(task) do
      send_resp(conn, :no_content, "")
    end
  end
end
