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

Repo.insert!(%User{
  # id: 1,
  name: "Krutarth",
  email: "k.patel@gmail.com"
})

Repo.insert!(%Task{
  id: 1,
  description: "Review AWS Documentation",
  user_id: 1
})

Repo.insert!(%Task{
  id: 2,
  description: "Online Training Courses",
  user_id: 1
})

Repo.insert!(%Task{
  id: 3,
  description: "Books",
  user_id: 1
})

Repo.insert!(%Task{
  id: 4,
  description: "Hands-On Experience",
  user_id: 1
})

Repo.insert!(%Task{
  id: 5,
  description: "Practice Exams",
  user_id: 1
})
