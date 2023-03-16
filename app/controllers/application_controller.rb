class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  before_action :authorized

  private
  
  def authorized
    return render json:{ error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
