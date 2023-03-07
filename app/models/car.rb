class Car < ApplicationRecord
  belongs_to :user
  has_many :cars
  has_many :reviews, through: :user 
end
