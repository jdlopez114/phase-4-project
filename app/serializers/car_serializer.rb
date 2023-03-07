class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :color, :miles, :type, :drive, :country, :img_url
  has_one :user
end
