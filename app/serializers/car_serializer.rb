class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :color, :miles, :category, :drive, :country, :img_url

  has_many :reviews

end
