class CreateNuggets < ActiveRecord::Migration[7.0]
  def change
    create_table :nuggets do |t|
      t.string :title
      t.string :description
      t.string :language
      t.text :content

      t.timestamps
    end
  end
end
