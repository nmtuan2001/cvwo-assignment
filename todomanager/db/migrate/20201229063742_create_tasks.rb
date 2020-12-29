class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :note
      t.boolean :completed
      t.datetime :deadline

      t.timestamps
    end
  end
end
