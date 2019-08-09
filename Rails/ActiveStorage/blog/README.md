# Active Storage

$ ruby -v 

ruby 2.6.1p33 (2019-01-30 revision 66950) [x86_64-darwin18]

$ rails new blog

$ cd blog

$ rails g scaffold Post title:string content:text

$ rails db:create

$ rails db:migrate

// add code changes in Post model, and views and permit the attribute :image in the posts_controller

$ rails active_storage:install

$ rails db:migrate

$ rails s

$ open http://localhost:3000/posts