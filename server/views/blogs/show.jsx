const React = require('react');
const Def = require('..default');
const blog = require('../../models/blog');

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                  <h3>{blog.name}</h3>
                  <img src={blog.image} alt={blog.name} />
                  <h3>{blog.categories}</h3>
                  <h3>{blog.content}</h3>
                <a 
                  href={`/blogs/${data.blog.id}/edit`} 
                  className="btn btn-warning">
                  Edit
                </a>  
                {``}
                <form 
                  method="POST" 
                  action={`/blogs/${data.blog.id}/comment/${c.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger" value="Delete Comment"/>
                 </form>
                </div>
              </div> 
              <hr />
                <h2>Comments</h2>
                <div className="row">

                </div>
          </main>    
        </Def>
    )
}

module.exports = show;
