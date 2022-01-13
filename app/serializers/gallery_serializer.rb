class GallerySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :img_url
end
