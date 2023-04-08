class UserSerializer < ActiveModel::Serializer
  attributes :id, :username 

  has_many :cars, serializer: UsersCarsSerializer

end
