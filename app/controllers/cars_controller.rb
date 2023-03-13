class CarsController < ApplicationController

  def index
    cars = Car.all
    render json: cars
  end

  def show
    car = Car.find( params[:id] )
    render json: car
  end

  def update
    car = Car.find( params[:id] )
    car.update!( car_params )
    render json: car
  end

  private
    # Only allow a list of trusted parameters through.
    def car_params
      params.require(:car).permit(:make, :model, :year, :color, :miles, :type, :drive, :country, :img_url)
    end
end
