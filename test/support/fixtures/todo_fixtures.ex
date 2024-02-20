defmodule ReactTodoList.TodoFixtures do

  @moduledoc """
  This module defines test helpers for creating
  entities via the `ReactTodoList.Todo` context.
  """
  alias ReactTodoList.Todo.User
  alias ReactTodoList.Todo
  
  @doc """
  Generate a task.
  """
  def task_fixture(_attrs \\ %{}) do
    {:ok, %User{id: user_id}} = Todo.create_user(%{"name" => "Raman1", "email" => "raman1@gmail.com"})
    valid_attrs = %{"description" => "some description", "user_id" => user_id}
    {:ok, task} =
       ReactTodoList.Todo.create_task(valid_attrs)

    task
  end
end
