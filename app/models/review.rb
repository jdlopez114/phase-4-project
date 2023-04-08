class Review < ApplicationRecord
  belongs_to :user
  belongs_to :car

  validates :comments, presence: true

  def username 
    self.user.username
  end

end
