defmodule ReactTodoListWeb.Api.TaskView do
  use ReactTodoListWeb, :view
  alias ReactTodoListWeb.Api.TaskView
  # alias ReactTodoListWeb.Api.GoalView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("tasks.json", %{tasks: tasks}) do
    Enum.map(tasks, fn task ->
      %{
        id: task.id,
        description: task.description,
        completed: task.completed,
        goal_id: task.goal_id
      }
    end)
  end

  def render("goals.json", %{goals: goals}) do
    # %{data: render_many(goals, TaskView, "goal.json")}
    Enum.map(goals, fn goal ->
      %{
        id: goal.id,
        title: goal.title,
        description: goal.description
      }
    end)
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("upload_successful.json", %{file: _file}) do
    %{}
  end

  def render("show_goal.json", %{goal: goal}) do
    %{
      id: goal.id,
      title: goal.title,
      description: goal.description
    }
  end

  def render("task.json", %{task: task}) do
    %{
      id: task.id,
      description: task.description,
      completed: task.completed,
      goal_id: task.goal_id
    }
  end

  def render("goal.json", %{goal: goal}) do
    %{
      id: goal.id,
      title: goal.title,
      description: goal.description
    }
  end
end
