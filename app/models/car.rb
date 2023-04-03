class Car < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
 
  validates :make, presence: true
  validates :model, presence: true, uniqueness: true
  validates :year, presence: true
  validates :img_url, presence: true

end
