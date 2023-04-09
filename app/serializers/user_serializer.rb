class UserSerializer < ActiveModel::Serializer
  attributes :id, :username 

  # has_many :cars, serializer: UsersCarsSerializer
  has_many :cars

end
