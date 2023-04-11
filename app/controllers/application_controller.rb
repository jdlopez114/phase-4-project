class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  before_action :authorize

  private
  def current_user
    User.find_by(id: session[:user_id])
  end
  
  def authorize
    render json: { errors: "Not authorized" }, status: :unauthorized unless current_user
  end

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found(notfound)
    render json: {error: "#{notfound.model} not found"}, status: :not_found
  end

end
