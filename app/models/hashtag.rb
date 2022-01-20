class Hashtag < ApplicationRecord
    has_many :gallery_tags, dependent: :destroy
    has_many :galleries, dependent: :destroy, through: :gallery_tags
  
    has_many :event_tags
    has_many :events, through: :event_tags
end