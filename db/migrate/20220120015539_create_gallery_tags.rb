class CreateGalleryTags < ActiveRecord::Migration[6.1]
  def change
    create_table :gallery_tags do |t|
      t.belongs_to :gallery, null: false, foreign_key: true
      t.belongs_to :hashtag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
