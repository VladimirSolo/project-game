const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout user={user}>
      {user ? (
        <div className="main_video">
          <video className="main_vhs " src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/4TBVITQDP0AW1650382032717.mp4" loop="loop" muted="muted" autoPlay="autoplay" playsinline="playsinline" />
          <div className="main_menu">
            <a href="/game">Start game</a>
          </div>
        </div>
      ) : (
        <span />
      )}
    </Layout>
  );
}

module.exports = MainPage;
