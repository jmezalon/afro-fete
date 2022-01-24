class HashtagSerializer < ActiveModel::Serializer
  attributes :id, :tag
  has_many :events
  has_many :galleries

 
end
 