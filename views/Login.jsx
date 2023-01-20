const React = require('react');
const Layout = require('./Layout');

function Login({ message, error }) {
  return (
    <Layout>
      {error && (
      <div>
        <h1>{message}</h1>
        <h2>{error.status}</h2>
        <pre>{error.stack}</pre>
      </div>
      )}
      <div className="login_page">
        <h1>Login Page</h1>
        <form action="/login" method="POST" id="loginForm" className="col-6 login_form">
          <div className="mb-3">
            <input name="name" type="text" className="form-control" placeholder="enter your name" required />
          </div>
          <div className="mb-3">
            <input name="password" type="password" className="form-control" placeholder="enter your password" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Login;
