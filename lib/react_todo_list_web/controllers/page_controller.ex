defmodule ReactTodoListWeb.PageController do
  use ReactTodoListWeb, :controller
  alias ReactTodoList.Todo

  def index(conn, %{"goal_id" => goal_id}) do
    tasks = Todo.list_tasks(goal_id)
    render(conn, "index.html", tasks: tasks)
  end

  def get_goals(conn, _params) do
    goals = Todo.list_goals()
    render(conn, "index.html", props: Poison.encode!(%{goals: goals}))
  end
end
