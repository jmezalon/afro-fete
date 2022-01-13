Rails.application.routes.draw do
  namespace :api do 
    resources :users, only: [:index, :update, :destroy]
    resources :events
    resources :galleries, only: [:index, :create, :destroy]
    resources :event_categories, only: [:create, :index, :show]
    resources :hashtags, only: [:create, :index, :show, :update]
    resources :favorites, only: [:create, :index, :destroy]
    resources :gallery_tags, only: [:create, :index, :show, :destroy]

    post "/signup", to:"users#create"
    get "/me", to:"users#show"
    post "/login", to:"sessions#create"
    delete '/logout', to:"sessions#destroy"
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
