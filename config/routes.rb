Rails.application.routes.draw do
  devise_for :clients
  devise_for :staffs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'application#index'

  resources :staffs, :clients, only: :index
end
