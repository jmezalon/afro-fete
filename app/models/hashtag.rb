class Hashtag < ApplicationRecord
  belongs_to :event

  has_many :gallery_tags, dependent: :destroy
  has_many :galleries, dependent: :destroy, through: :gallery_tags
end
