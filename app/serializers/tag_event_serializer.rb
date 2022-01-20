class TagEventSerializer < ActiveModel::Serializer
  attributes :id, :tag, :events
  # has_many :events


  def events 
    object.events.map{ |e| { venue_name: e.venue_name, event_category: e.event_category } }
  end
end
