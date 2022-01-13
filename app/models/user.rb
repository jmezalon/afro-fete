class User < ApplicationRecord
    has_secure_password

    has_many :events
    has_many :galleries
    has_many :favorites
    validates :username, uniqueness: true
end
