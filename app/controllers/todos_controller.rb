class TodosController < ApplicationController

  def index
    # this is for React.js to render server-side
    @presenter = {
      :comments => Todo.all,
      :form => {
        :action => todos_path,
        :csrf_param => request_forgery_protection_token,
        :csrf_token => form_authenticity_token
      }
    }
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.valid?
      @todo.save
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  private

    def todo_params
      params.require(:todo).permit(:done, :position, :todo, :active)
    end
end
