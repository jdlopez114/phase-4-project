class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  def show
    review = Review.ffind( params[:id] )
    render json: review, status: :ok
  end

  def create
    review = Review.create!( review_params )
    render json: review, status: :created
  end

  def update
    review = Review.find( params[:id] )
    review.update!( review_params )
    render json: review, status: :ok
  end

  def destroy
    review = Review.find( params[:id] )
    review.destroy
    head :no_content  
  end

  private
    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:comments, :user_id, :car_id)
    end
end
