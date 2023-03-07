class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :user_name
  has_one :user
  has_one :car
end
