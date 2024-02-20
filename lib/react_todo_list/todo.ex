defmodule ReactTodoList.Todo do
  @moduledoc """
  The Todo context.
  """

  import Ecto.Query, warn: false
  alias ReactTodoList.Repo

  alias ReactTodoList.Todo.Task
  alias ReactTodoList.Todo.User
 
  @doc """
  Returns the list of tasks.
  """
  def list_tasks() do
    Repo.all(Task)
  end

  @doc """
  Returns the list of tasks by user_id.
  """
  def list_tasks(user_id) do
    from(task in Task, where: task.user_id == ^user_id) |> Repo.all()
  end

  @doc """
  Returns the list of users.
  """
  def list_users do
    Repo.all(User)
  end

  @doc """
  Creates a User.
  """
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Gets a single task.

  """
  def get_task!(id), do: Repo.get!(Task, id)
  
  def find_max_task_id() do
    query = from(q in Task, order_by: [desc: q.id], limit: 1)
    Repo.all(query)
 end

  @doc """
  Creates a task.
  """
  def create_task(attrs \\ %{}) do
    max_id = find_max_task_id()
    %Task{}
    |> Task.changeset(%{id: max_id+1, description: attrs.description, user_id: attrs.user_id})
    |> Repo.insert()
  end

  @doc """
  Updates a task.
  """
  def update_task(%Task{} = task, attrs) do
    task
    |> Task.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a task.
  """
  def delete_task(%Task{} = task) do
    Repo.delete(task)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking task changes.
  """
  def change_task(%Task{} = task, attrs \\ %{}) do
    Task.changeset(task, attrs)
  end
end
