class ReviewSerializer < ActiveModel::Serializer
  # attributes :id, :u_id, :username, :reviewed_car, :comments
  attributes :id, :username, :user_id, :car_id, :comments

end
