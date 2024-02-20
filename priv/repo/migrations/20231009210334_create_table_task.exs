defmodule ReactTodoList.Repo.Migrations.CreateTableTask do
  use Ecto.Migration

  def change do
    create table(:task, primary_key: false) do
      add :id, :bigserial, primary_key: true
      add :sequence, :integer
      add :description, :text
      add :user_id, :integer

      timestamps()
    end
  end
end
