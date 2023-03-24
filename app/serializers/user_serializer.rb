class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :reviews
  has_many :cars, serializer: MyCarsSerializer

end
