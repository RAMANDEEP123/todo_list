defmodule ReactTodoList.Todo.Goal do
    use Ecto.Schema
    import Ecto.Changeset
  
    schema "goal" do
      field :title, :string
      field :description, :string
      field :user_id, :string
  
      timestamps()
    end
  
    @doc false
    def changeset(task, attrs) do
      task
      |> cast(attrs, [:title, :description, :user_id])
      |> unique_constraint(:id, name: :PRIMARY)
    end
  end
  