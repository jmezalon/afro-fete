class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.belongs_to :event_category, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :img_url
      t.string :venue_name
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.datetime :date

      t.timestamps
    end
  end
end
