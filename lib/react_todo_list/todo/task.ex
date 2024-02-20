defmodule ReactTodoList.Todo.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "task" do
    field :description, :string
    field :user_id, :integer

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:description,  :user_id])
    |> validate_required([:description])
  end
end