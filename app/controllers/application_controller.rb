class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private
  
  def authorize
    return render json:{ error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found(notfound)
    render json: {error: "#{notfound.model} not found"}, status: :not_found
  end

end
