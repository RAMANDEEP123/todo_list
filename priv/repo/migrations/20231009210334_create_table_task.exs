defmodule ReactTodoList.Repo.Migrations.CreateTableTask do
  use Ecto.Migration

  def change do
    create table(:task) do
      add :sequence, :integer
      add :description, :text
      add :user_id, :integer

      timestamps()
    end
  end
end
