class EventCategory < ApplicationRecord
    has_many :events, dependent: :destroy
end
