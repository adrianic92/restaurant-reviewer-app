class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: :created
    end

    private

    def restaurant_params
        params.permit(:name, :location, :image)
    end

end
