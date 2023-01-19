const React = require('react');
const Layout = require('./Layout');

function Register({ message, error }) {
  return (
    <Layout>
      {error && (
      <div>
        <h1>{message}</h1>
        <h2>{error.status}</h2>
        <pre>{error.stack}</pre>
      </div>
      )}
      <h1>Registration Page</h1>
      <form action="/register" method="POST" id="registerForm" className="col-6">
        <div className="mb-3">
          <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your name" required />
        </div>
        <div className="mb-3">
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="enter your password" required />
        </div>
        <button type="submit" className="btn btn-primary">Registration</button>
      </form>
    </Layout>
  );
}

module.exports = Register;
