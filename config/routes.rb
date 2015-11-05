IamTodoApp::Application.routes.draw do
	root controller: 'todos', action: :index
  resources :todos
end
