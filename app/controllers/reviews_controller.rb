class ReviewsController < ApplicationController
    
    skip_before_action :authorize, only: [:higher]

    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = @current_user.reviews.create!(review_create_params)
        render json: review, status: :created
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    def update
        review = find_review
        review.update(review_update_params)
        render json: review
    end

    def higher
        number = params[:number]
        reviews = Review.all.filter {|rev| rev.rating >= number.to_i}.uniq
        restaurants = reviews. map { |rev| rev.restaurant}.uniq
        if restaurants.length == 0
            render json: "Sorry, no reviews"
        else
            render json: restaurants
        end
    end

    private

    def review_create_params
        params.permit(:restaurant_id, :rating, :description)
    end

    def review_update_params
        params.permit(:rating, :description)
    end

    def find_review
        @current_user.reviews.find(params[:id])
    end

end
