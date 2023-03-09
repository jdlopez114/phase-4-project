class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :color, :miles, :category, :drive, :country, :img_url

end
