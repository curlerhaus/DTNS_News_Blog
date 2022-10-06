const React = require('react');
const Def = require('../default');

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Blog</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={data.blog.name} 
                            required 
                        />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Blog Picture</label>
                        <input 
                            className="form-control" 
                            id="pic" 
                            name="pic"
                            value={data.blog.pic} 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="categories">Categories</label>
                        <input 
                            className="form-control" 
                            id="city" 
                            name="city" 
                            value={data.blog.categories} 
                        />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="content">Content</label>
                        <input 
                            className="form-control" 
                            id="content" 
                            name="content" 
                            value={data.blog.content} 
                            />
                    </div>
                        <input className="btn btn-primary" type="submit" value="Update Blog" />
                </div>
            </form>
          </main>
        </Def>
    );
}

module.exports = edit_form;