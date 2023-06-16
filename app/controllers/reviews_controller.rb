class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:user_id, :restaurant_id, :rating, :description)
    end

    def find_review
        @current_user.reviews.find(params[:id])
    end

end
