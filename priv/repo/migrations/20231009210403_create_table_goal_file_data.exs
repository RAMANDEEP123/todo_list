defmodule ReactTodoList.Repo.Migrations.CreateTableGoalFileData do
  use Ecto.Migration

  def change do
    create table(:goal_file_data) do
      add :name, :text
      add :path, :text
      add :mime_type, :text

      timestamps()
    end
  end
end
