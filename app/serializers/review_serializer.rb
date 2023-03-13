class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :reviewer 

  def reviewer 
    {id: self.object.user.id,
    username: self.object.user.username }
  end

  belongs_to :user
  belongs_to :car
end
