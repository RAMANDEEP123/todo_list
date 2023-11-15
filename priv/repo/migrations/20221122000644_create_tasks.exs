defmodule ReactTodoList.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      # add :id, :integer, primary_key: true, autogenerate: true
      add :completed, :boolean, default: false
      add :description, :string

      timestamps()
    end
    
  end
end
