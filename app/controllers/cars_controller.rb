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

end
