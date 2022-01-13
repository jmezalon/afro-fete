class Gallery < ApplicationRecord
  belongs_to :user

  has_many :gallery_tags, dependent: :destroy
  has_many :hashtags, through: :gallery_tags
end
