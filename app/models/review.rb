class Review < ApplicationRecord
  belongs_to :user
  belongs_to :car

  def u_id 
    self.user.id
  end

  def username 
    self.user.username
  end

  def reviewed_car
    { :make => self.car.make, :model => self.car.model, :img_url => self.car.img_url }
  end

end
