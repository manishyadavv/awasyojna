Rails.application.routes.draw do

get '/'=>'login#index'

get '/vregistration'=>'login#vregistration'

post '/registration'=>'login#registration'

post '/login'=>'login#login'
post '/logout'=>'login#logout'

get '/User_profile'=>'login#User_profile'

get '/vlogin'=>'login#vlogin'
end
