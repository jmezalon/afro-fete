class EventTagSerializer < ActiveModel::Serializer
  attributes :id, :tag, :events
 
  def events 
    object.events.map{ |e| { id: e.id, img_url: e.img_url, venue_name: e.venue_name, address: e.address, city: e.city, state:e.state, zip: e.zip, description:e.description, link_to_purchase: e.link_to_purchase, date:e.date, hashtags: e.hashtags, event_category: e.event_category } }
  end
end
