class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.string  :name,                   :null => false, :limit => 50
      t.timestamps
    end
  end
end
