const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>DTN News Blog</h1>
                <div> 
                    <img className="col-sm-12" src="./public/logo/logo-no-bakcground.png" alt="logo" />
            
                </div>
            </main>
        </Def>
    )
}