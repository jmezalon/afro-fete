class GallerySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :img_url
  has_many :hashtags
end
