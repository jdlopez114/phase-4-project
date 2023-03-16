class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    wrap_parameters format: []

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

end
