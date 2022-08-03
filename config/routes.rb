# frozen_string_literal: true

Rails.application.routes.draw do
  get :about, to: "site#about"
  root "site#home"
end
