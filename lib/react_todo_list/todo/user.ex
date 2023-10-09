defmodule ReactTodoList.Todo.User do
    use Ecto.Schema
    import Ecto.Changeset
  
    schema "user" do
      field :name, :string
      field :email, :string
      field :password, :string
  
      timestamps()
    end
  
    @doc false
    def changeset(task, attrs) do
      task
      |> cast(attrs, [:name, :email, :password])
    end
  end
  