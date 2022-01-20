class CreateGalleries < ActiveRecord::Migration[6.1]
  def change
    create_table :galleries do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :img_url

      t.timestamps
    end
  end
end
