class TodosController < ApplicationController
  def index
    @todo = Todo.new
    @todos = Todo.order('created_at ASC')
  end

  def create
    @todo = Todo.new(todo_params)
      respond_to do |format|
        format.json { render json: @message}
      end
    if @todo.save
    else
      render :index, alert: 'Todoを入力してください'
    end
  end

  private
  def todo_params
    params.permit(:content)
  end
end
