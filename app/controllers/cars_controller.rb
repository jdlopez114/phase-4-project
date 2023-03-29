class CarsController < ApplicationController
skip_before_action :authorize

  def index
    cars = Car.all
    render json: cars, status: :ok
  end

  def show
    car = Car.find( params[:id] )
    render json: car, status: :ok
  end

  def create 
    car = Car.create!( car_params )
    render json: car, status: :created 
  end

  private 

  def car_params
    params.permit(:make, :model, :year, :color, :drive, :miles, :img_url)
  end

end
