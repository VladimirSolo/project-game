const React = require('react');
const Layout = require('./Layout');

function MainPage() {
  return (
    <Layout>
      <header>
        <nav className="header_nav">
          <ul className="header_list">
            <li className="header_item">
              <a className="header_link" href="/login">Login</a>
            </li>
            <li>
              <a className="header_link" href="/register">Rigistration</a>
            </li>
          </ul>
        </nav>
      </header>
    </Layout>
  );
}

module.exports = MainPage;
