# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     ReactTodoList.Repo.insert!(%ReactTodoList.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


alias ReactTodoList.Repo
alias ReactTodoList.Todo.Task
alias ReactTodoList.Todo.User
alias ReactTodoList.Todo.Goal

Repo.insert!(%User{
  id: 1,
  name: "Krutarth",
  email: "k.patel@gmail.com"
})

Repo.insert!(%Goal{
  id: 1,
  title: "Learn AWS",
  description: "Preparing for aws cloud practitioner certification.",
  user_id: "1"
})

Repo.insert!(%Task{
  id: 1,
  description: "Review AWS Documentation",
  completed: false,
  progress: "0",
  goal_id: "1"
})

Repo.insert!(%Task{
  id: 2,
  description: "Online Training Courses",
  progress: "0",
  goal_id: "1"
})

Repo.insert!(%Task{
  id: 3,
  description: "Books",
  progress: "0",
  goal_id: "1"
})

Repo.insert!(%Task{
  id: 4,
  description: "Hands-On Experience",
  progress: "0",
  goal_id: "1"
})

Repo.insert!(%Task{
  id: 5,
  description: "Practice Exams",
  progress: "0",
  goal_id: "1"
})
