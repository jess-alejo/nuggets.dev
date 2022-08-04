# frozen_string_literal: true

Rails.application.routes.draw do
  resources :nuggets
  get :about, to: "site#about"
  root "nuggets#index"
end
