class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :avatar, :isPromoter
end
