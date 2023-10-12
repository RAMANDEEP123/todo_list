defmodule ReactTodoListWeb.Api.TaskController do
  use ReactTodoListWeb, :controller

  alias ReactTodoList.Todo
  alias ReactTodoList.Todo.Task
  alias ReactTodoList.Todo.Goal

  action_fallback ReactTodoListWeb.FallbackController

  def index(conn, _params) do
    tasks = Todo.list_tasks()
    render(conn, "index.json", tasks: tasks)
  end

  def get_tasks(conn, %{"goal_id" => goal_id}) do
    tasks = Todo.list_tasks(goal_id)
    render(conn, "tasks.json", tasks: tasks)
  end

  def get_goals(conn, _params) do
    goals = Todo.list_goals()
    render(conn, "goals.json", goals: goals)
  end
  
  def create_goal(conn, %{"goal" => task_params}) do
    with {:ok, %Goal{} = goal} <- Todo.create_goal(task_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_task_path(conn, :show, goal))
      |> render("show_goal.json", goal: goal)
    end
  end

  def create(conn, %{"task" => task_params}) do
    with {:ok, %Task{} = task} <- Todo.create_task(task_params) do
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
