class StaffsController < ApplicationController
  before_action :authenticate_staff!
  def index; end

  def get_user
    render json: current_staff
  end
end
