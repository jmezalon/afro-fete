class HashtagSerializer < ActiveModel::Serializer
  attributes :id, :tag
  has_many :events 
end
