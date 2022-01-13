class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_category_id, :user_id, :img_url, :venue_name, :address, :city, :state, :zip, :description, :date
end
