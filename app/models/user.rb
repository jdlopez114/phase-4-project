class User < ApplicationRecord
    has_many :cars, dependent: :destroy 
    has_many :reviews, through: :cars 
end
