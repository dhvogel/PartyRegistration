#bundle exec rackup -p 9292 config.ru
use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"


static_page_mappings = {
  '/'                  => 'public/index.html',
  '/index.html'        => 'public/index.html',
  '/submissions.html'   => 'public/submissions.html',
  '/order-history.html' => 'public/order-history.html',
  '/update-menus.html' => 'public/update-menus.html'
}

static_page_mappings.each do |req, file|
  map req do 
    run Proc.new { |env|
      [
        200, 
        {
          'Content-Type'  => 'text/html', 
          'Cache-Control' => 'public, max-age=6400',
        },
        File.new(file, File::RDONLY)
      ]
    }
  end
end