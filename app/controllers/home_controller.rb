class HomeController < ApplicationController
  def index
    render 'public/views/index', :format => [:html]
  end
end