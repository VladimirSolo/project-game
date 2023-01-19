const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout user={user}>
      <div>Hello</div>
    </Layout>
  );
}

module.exports = MainPage;
