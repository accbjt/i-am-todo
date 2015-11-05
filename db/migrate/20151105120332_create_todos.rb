class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.boolean :done
      t.integer :position
      t.string :todo
      t.boolean :active

      t.timestamps null: false
    end
  end
end
