require 'sinatra'

class FormationBinner < Sinatra::Base

  get '/' do
    erb(:index)
  end

end
