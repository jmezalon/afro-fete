class Event < ApplicationRecord
  belongs_to :event_category
  belongs_to :user

  has_many :event_tags
  has_many :hashtags, through: :event_tags
  has_many :favorites, dependent: :destroy

  validates :venue_name, :event_name, :img_url, :address, :city, :state, :date, presence: true

  def hash_count 
    self.hashtags.count
  end

  def fav_count 
    Favorite.where(event_id: self.id).count
  end
end
