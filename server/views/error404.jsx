const React = require('react')
const Def = require('./blogs')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry we can't find this page!</p>
              <img src="../images/Ooppss.png" alt="This pug feels sorry" height="50%" width="50%"/>
              <div>
              Photo by <a href="AUTHOR_LINK">Charles Deluvio</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }  

module.exports = error404