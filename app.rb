require 'sinatra'
require 'sinatra/partial'

class FormationBinner < Sinatra::Base
  register Sinatra::Partial
  set :partial_template_engine, :erb

  get '/' do
    erb(:index)
  end

end
