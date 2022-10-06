const React = require('react')
const Def = require('.')

function index (data) {
    let blogsFormatted = data.blogs.map((blog) => {
      return (
        <div className="col-sm-6">
          <h3>
            <a href={`/blogs/${blog.id}`}>
              {blog.name}
            </a>
          </h3>
          <img src={blog.pic} alt={blog.name}/>
          <p className="text-center">
            Description {blog.categories}, {blog.content}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>DTN News Blog</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }  

module.exports = index
