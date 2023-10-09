defmodule ReactTodoList.Repo.Migrations.CreateTableUser do
  use Ecto.Migration

  def change do
    create table(:user) do
      add :name, :text, null: false
      add :email, :text
      add :passowrd, :text

      timestamps()
    end
  end
end
