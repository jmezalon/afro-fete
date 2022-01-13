class User < ApplicationRecord
    has_secure_password

    has_many :events, :galleries, :favorites
    validates :username, uniqueness: true
end
