class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :display]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def display
        users = User.all
        render json: users
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name)
    end
end
