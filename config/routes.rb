PerformanceTest::Application.routes.draw do
  root :to => 'main#index'
  
  get '/server' => 'main#server'
  get '/client' => 'main#client'

  get '/api/widgets' => 'api#widgets'
end
