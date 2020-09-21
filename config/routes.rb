Rails.application.routes.draw do
  devise_for :clients
  devise_for :staffs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'application#index'

  resources :staffs, only: %i[index] do
    get 'get_user', on: :collection
  end
  resources :clients, only: :index do

  end
end
