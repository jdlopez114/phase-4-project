class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments
  has_one :user
  has_one :car
end
