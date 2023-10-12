defmodule ReactTodoList.Repo.Migrations.CreateTaskTable do
  use Ecto.Migration

  def change do
    create table(:task_test) do
      add :description, :text
      add :completed, :boolean, default: false, null: false
      add :goal_id, :text

      timestamps()
    end
  end
end
