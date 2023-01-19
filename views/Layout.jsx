const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>title</title>
        <link rel="stylesheet" href="/style/style.css" />
      </head>
      <body>
        <div className="container">
          <header>
            {user ? (
              <nav className="header_nav">
                <ul className="header_list">
                  <li className="header_item">
                    <a className="header_link" href="/">Main</a>
                  </li>
                  <li>
                    <a className="header_link" href="/logout">Logout</a>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className="header_nav">
                <ul className="header_list">
                  <li className="header_item">
                    <a className="header_link" href="/login">Login</a>
                  </li>
                  <li>
                    <a className="header_link" href="/register">Registration</a>
                  </li>
                </ul>
              </nav>
            )}
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
