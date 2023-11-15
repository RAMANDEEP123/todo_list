# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :react_todo_list,
  ecto_repos: [ReactTodoList.Repo]

# Configures the endpoint
config :react_todo_list, ReactTodoListWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: ReactTodoListWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ReactTodoList.PubSub,
  live_view: [signing_salt: "fmHcqYJi"],
  http: [
    port: 4000,
    protocol_options: [
      max_keepalive: 100_000
    ]],
  cors: true


# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :react_todo_list, ReactTodoList.Mailer, adapter: Swoosh.Adapters.Local

# Swoosh API client is needed for adapters other than SMTP.
config :swoosh, :api_client, false

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.14.29",
  default: [
    args:
      ~w(js/app.jsx --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# config :httpotion,
#   follow_redirect: true,
#   pool_timeout: 30_000,
#   recv_timeout: 8_000,
#   ssl: [
#     {:versions, [:"tlsv1.2"]},
#     {:cacertfile, "/path/to/ca-bundle.crt"}
#   ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
