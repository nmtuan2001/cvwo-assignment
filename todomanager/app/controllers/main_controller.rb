class MainController < ApplicationController
  def index
  end

  def all_tasks
  	completed = Task.where(completed: true)
  	uncompleted = Task.where(completed: false)
  	render json: { completed: completed, uncompleted: uncompleted }
  end

end
