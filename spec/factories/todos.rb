require 'faker'

FactoryGirl.define do
	factory :todo do
		done true
		position 1 
		todo "this is a new todo"
		active true

		factory :invalid_todo do
			todo nil
		end
	end
end