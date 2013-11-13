class MainController < ApplicationController
  def server
  	@widgets = Widget.order('RAND()').limit(20)
  end
end
