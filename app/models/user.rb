class User < ApplicationRecord
    has_many :reviews 
    has_many :cars, through: :reviews 

    has_secure_password

    validates :username, presence: true, uniqueness: true

    def self.top_4_users
      
        users = User.all
        users.sort_by { |user| user.reviews.count }.reverse.take(4)

    end

end
