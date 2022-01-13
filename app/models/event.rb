class Event < ApplicationRecord
  belongs_to :event_category
  belongs_to :user

  has_many :hashtags, dependent: :nullify
  has_many :favorites, dependent: :destroy

  validates :venue_name, :img_url, :address, :city, :state, :date, presence: true
end
