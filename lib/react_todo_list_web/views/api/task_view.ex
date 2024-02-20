defmodule ReactTodoListWeb.Api.TaskView do
  use ReactTodoListWeb, :view
  alias ReactTodoListWeb.Api.TaskView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("tasks.json", %{tasks: tasks}) do
    Enum.map(tasks, fn task ->
      %{
        id: task.id,
        description: task.description,
        user_id: task.user_id
      }
    end)
  end

  def render("users.json", %{users: users}) do
    Enum.map(users, fn user ->
      %{
        id: user.id,
        title: user.name,
      }
    end)
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("upload_successful.json", %{file: _file}) do
    %{}
  end

  def render("show_user.json", %{user: user}) do
    %{
      id: user.id,
      title: user.name
    }
  end

  def render("task.json", %{task: task}) do
    %{
      id: task.id,
      description: task.description,
      user_id: task.user_id
    }
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      title: user.title,
      description: user.description
    }
  end
end
