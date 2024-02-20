defmodule ReactTodoListWeb.Router do
  use ReactTodoListWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {ReactTodoListWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug,
      origins: ["http://localhost:4000"],
      methods: ~w(GET POST PUT PATCH DELETE OPTIONS),
      headers: ~w(Accept Authorization Content-Type),
      max_age: 600
  end

  scope "/api", ReactTodoListWeb.Api, as: :api do
    pipe_through :api
    
    
    post "/file_upload", TaskController, :upload
    get "/users", TaskController, :get_users
    post "/users/create", TaskController, :create_user
    get "/user/tasks/:user_id", TaskController, :get_tasks
    put "/tasks/update", TaskController, :update
    resources "/tasks", TaskController
  end

  scope "/", ReactTodoListWeb do
    pipe_through :browser

    get "/", PageController, :get_users
    get "/user/tasks/:user_id", TaskController, :index
    resources "/tasks", TaskController
  end



  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: ReactTodoListWeb.Telemetry
    end
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
