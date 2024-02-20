defmodule ReactTodoList.Repo.Migrations.CreateTableUser do
  use Ecto.Migration

  def change do
    create table(:user, primary_key: false) do
      add :id, :bigserial, primary_key: true
      add :email, :string, null: false
      add :name, :string

      timestamps()
    end

    create unique_index(:user, [:email])
  end
end
