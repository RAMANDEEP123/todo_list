defmodule ReactTodoList.Repo.Migrations.CreateTableGoal do
  use Ecto.Migration

  def change do
    create table(:goal) do
      add :title, :text, null: false
      add :description, :text
      add :user_id, :text

      timestamps()
    end
  end
end
