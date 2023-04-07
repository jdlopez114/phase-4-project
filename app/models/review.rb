class Review < ApplicationRecord
  belongs_to :user
  belongs_to :car

  validates :comments, presence: true

  # def self.u_id 
  #   self.user.id
  # end

  def username 
    self.user.username
  end

  def reviewed_car
    { :make => self.car.make, :model => self.car.model, :img_url => self.car.img_url }
  end

end
