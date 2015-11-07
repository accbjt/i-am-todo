class Todo < ActiveRecord::Base
	validates :todo, :position, presence: true
end
