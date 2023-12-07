defmodule ReactTodoListWeb.Api.TaskController do
  use ReactTodoListWeb, :controller
  import ExAws.S3

  alias ReactTodoList.Todo
  alias ReactTodoList.Todo.Task
  alias ReactTodoList.Todo.Goal

  @bucket "goal-tracker-aws-bucket"

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

  def upload(conn, %{"file" => %Plug.Upload{} = upload_params}) do
    {filename, content_type, file_content} = extract_upload_info(upload_params)

    s3_key = "uploads/#{filename}" # Set the S3 key as needed
    result = upload_to_s3(s3_key, file_content, content_type)
    IO.inspect(result)
    case result do
      %ExAws.Operation.S3{} = s3_operation ->
        case Map.get(s3_operation, :status) do
          :ok ->
            conn
            |> put_status(:ok)
            |> render("upload_successful.json", %{filename: filename})
    
    
          _ ->
            conn
            |> put_status(:ok)
            |> render("upload_successful.json", %{filename: filename})
        end
    
      _ ->
        conn
            |> put_status(:ok)
            |> render("upload_successful.json", %{filename: filename})
    end
  end

  defp extract_upload_info(%Plug.Upload{path: path, content_type: content_type, filename: filename}) do
    {filename, content_type, File.read!(path)}
  end

  defp upload_to_s3(key, body, content_type) do
    ExAws.S3.put_object(@bucket, key, body, content_type: content_type) |> ExAws.request!()
  end
end
