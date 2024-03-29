

class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :event_category_id, :user_id, :img_url, :venue_name, :address, :city, :state, :zip, :description, :date, :link_to_purchase, :hash_count, :fav_count
  has_many :hashtags
  belongs_to :event_category
end
