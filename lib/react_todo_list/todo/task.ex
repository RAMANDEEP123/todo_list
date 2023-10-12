defmodule ReactTodoList.Todo.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tasks" do
    field :completed, :boolean, default: false
    field :description, :string
    field :progress, :string, default: "0"
    field :goal_id, :string

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:description, :completed, :progress, :goal_id])
    |> unique_constraint(:id, name: :PRIMARY)
  end
end
