class EventTagSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :hashtag_id
  # has_many :events
  # has_many :hashtags
end
