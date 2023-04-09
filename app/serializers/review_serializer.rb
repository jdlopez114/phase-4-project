class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_id, :car_id, :comments

end
