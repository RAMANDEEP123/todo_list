defmodule ReactTodoList.Repo.Migrations.AddColumnToTableTask do
  use Ecto.Migration

  def change do
    alter table("tasks") do
      add :progress, :text
      add :goal_id, :text
    end
  end
end
