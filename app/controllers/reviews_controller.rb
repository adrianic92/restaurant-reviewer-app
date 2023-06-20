class ReviewsController < ApplicationController
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.create!(review_create_params)
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

    private

    def review_create_params
        params.permit(:user_id, :restaurant_id, :rating, :description)
    end

    def review_update_params
        params.permit(:rating, :description)
    end

    def find_review
        @current_user.reviews.find(params[:id])
    end

end
