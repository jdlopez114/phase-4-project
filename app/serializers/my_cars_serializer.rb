class MyCarsSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :img_url

end
