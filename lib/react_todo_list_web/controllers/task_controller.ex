defmodule ReactTodoListWeb.TaskController do
  use ReactTodoListWeb, :controller

  alias ReactTodoList.Todo
  alias ReactTodoList.Todo.Task

  def index(conn, _params) do
    tasks = Todo.list_tasks()
    render(conn, "index.html", tasks: tasks)
  end

  def get_tasks(conn, %{"goal_id" => goal_id}) do
    tasks = Todo.list_tasks(goal_id)
    render(conn, "tasks.html", tasks: tasks)
  end
  
  def get_goals(conn, _params) do
    IO.puts("*********************************8")
    goals = Todo.list_goals()
    IO.inspect goals
    render(conn, "index.html", goals: goals)
  end

  def new(conn, _params) do
    changeset = Todo.change_task(%Task{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"task" => task_params}) do
    IO.puts("task created successully")
    IO.inspect task_params
    case Todo.create_task(task_params) do
      {:ok, task} ->
        conn
        |> put_flash(:info, "Task created successfully.")
        |> redirect(to: Routes.task_path(conn, :show, task))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    task = Todo.get_task!(id)
    render(conn, "show.html", task: task)
  end

  def edit(conn, %{"id" => id}) do
    task = Todo.get_task!(id)
    changeset = Todo.change_task(task)
    render(conn, "edit.html", task: task, changeset: changeset)
  end

  def update(conn, %{"id" => id, "task" => task_params}) do
    task = Todo.get_task!(id)

    case Todo.update_task(task, task_params) do
      {:ok, task} ->
        conn
        |> put_flash(:info, "Task updated successfully.")
        |> redirect(to: Routes.task_path(conn, :show, task))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", task: task, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    task = Todo.get_task!(id)
    {:ok, _task} = Todo.delete_task(task)

    conn
    |> put_flash(:info, "Task deleted successfully.")
    |> redirect(to: Routes.task_path(conn, :index))
  end

  def upload(conn, params) do
    # {_filename, _content_type, _file_content} = extract_upload_info(upload_params)

    # Your file upload logic goes here

    conn
    |> put_status(:ok)
    |> render("upload_successful.json", %{message: "File uploaded successfully"})
  end

  # defp extract_upload_info(%Plug.Upload{path: path, content_type: content_type, filename: filename}) do
  #   {filename, content_type, File.read!(path)}
  # end
end
