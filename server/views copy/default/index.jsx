const React = require('react')
const Def = require('../default')

function index (data) {
    let blogsFormatted = data.blogs.map((blog) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href={`/blogs/${blog.id}`}>
              {blog.name}
            </a>
          </h2>
          <p className="text-center">
            {blog.categories}
          </p>
          <img src={blog.pic} alt={blog.name}/>
          <p className="text-center">
            Located in {blog.categories}, {blog.content}
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
