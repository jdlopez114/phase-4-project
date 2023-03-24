class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :u_id, :username, :reviewed_car, :comments

end
