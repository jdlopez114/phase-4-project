class ReviewsController < ApplicationController
  before_action :authorize

  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  def show
    review = Review.uniq.find( params[:id] )
    render json: review, status: :ok
  end

  def create
    review = @current_user.reviews.create( review_params )
    render json: review, status: :created
  end

  def update
    review = @current_user.reviews.find( params[:id] )
    review.update!( review_params )
    render json: review, status: :ok
  end

  def destroy
    review = @current_user.reviews.find( params[:id] )
    review.destroy
    head :no_content  
  end

  private
  
    def review_params
      params.permit( :comments, :car_id )
    end

end
