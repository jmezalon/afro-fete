class Event < ApplicationRecord
  belongs_to :event_category
  belongs_to :user

  has_many :hashtags
  has_many :favorites, dependent: :destroy

  validates :venue_name, :img_url, :address, :city, :state, :date, presense: true
end
