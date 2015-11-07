IamTodoApp::Application.routes.draw do
	root controller: 'todos', action: :index
  resources :todos, only: [:index, :update, :create]
end
