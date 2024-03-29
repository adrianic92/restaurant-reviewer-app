Rails.application.routes.draw do
  
  resources :reviews
  # resources :users
  resources :restaurants, only: [:create, :index]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/number/:number", to: "reviews#higher"

  get "/myreviews", to: "users#my_reviews"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
