class User < ApplicationRecord
    has_many :reviews 
    has_many :cars, through: :reviews 

    has_secure_password

    validates :username, presence: true, uniqueness: true

    def self.top_4_users
        self
        .joins(:reviews)
        .group(:id)
        .order("COUNT(reviews.id) DESC")
        .limit(4)
    end

end
