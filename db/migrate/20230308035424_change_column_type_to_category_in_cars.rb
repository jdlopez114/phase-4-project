class ChangeColumnTypeToCategoryInCars < ActiveRecord::Migration[6.1]
  def change
    rename_column :cars, :type, :category
  end
end
