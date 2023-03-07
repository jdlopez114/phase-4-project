class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.string :color
      t.integer :miles
      t.string :type
      t.string :drive
      t.string :country
      t.string :img_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
