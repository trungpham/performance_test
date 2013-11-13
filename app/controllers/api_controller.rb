class ApiController < ApplicationController
  def widgets
  	render :json => Widget.order('RAND()').limit(20)
  end
end
