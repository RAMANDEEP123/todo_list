defmodule ReactTodoList.Todo.GoalFileData do
    use Ecto.Schema
    import Ecto.Changeset
  
    schema "goal_file_data" do
      field :name, :string
      field :path, :string
      field :mime_type, :string
  
      timestamps()
    end
  
    @doc false
    def changeset(task, attrs) do
      task
      |> cast(attrs, [:name, :path, :mime_type])
    end
  end
  