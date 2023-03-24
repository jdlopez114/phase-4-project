class ReviewsController < ApplicationController
  skip_before_action :authorize

  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  def show
    review = Review.uniq.find( params[:id] )
    render json: review, status: :ok
  end

  def show_my_cars
    my_cars = Review.find_by(u_id: params[:u_id])
    render json: my_cars, status: :ok
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
    def review_params
      params.permit(:comments, :user_id, :car_id)
    end

end
