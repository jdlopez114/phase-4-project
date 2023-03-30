class Car < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :model, presence: true
  validates :make, presence: true
  validates :year, presence: true
  validates :img_url, presence: true

end
