const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>RestRant This</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                <link rel ="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href='./search'>Search</a>
                        </li>
                        <li>
                            <a href="login">Login</a>
                        </li>
                        <li>
                            <a href="signUp">SignUp</a>
                        </li>
                    </ul>
                </nav>
                    {html.children}
            </body>
        </html>
    )
  }
  
module.exports = Def
