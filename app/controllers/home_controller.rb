class HomeController < ApplicationController
  def index
    render 'public/views/index', :format => [:html], :layout => false
  end
end