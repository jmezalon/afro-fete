class CreateHashtags < ActiveRecord::Migration[6.1]
  def change
    create_table :hashtags do |t|
      t.belongs_to :event, null: false, foreign_key: true
      t.string :tag

      t.timestamps
    end
  end
end
