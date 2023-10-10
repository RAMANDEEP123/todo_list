defmodule ReactTodoList.Todo.Goal do
    use Ecto.Schema
    import Ecto.Changeset
  
    schema "goal" do
      field :title, :string
      field :description, :string
      field :goal_id, :string
      field :progress, :integer
  
      timestamps()
    end
  
    @doc false
    def changeset(task, attrs) do
      task
      |> cast(attrs, [:title, :description, :goal_id, :progress])
    end
  end
  