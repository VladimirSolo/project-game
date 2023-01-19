require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderTemplate(reactElement, properties, response) {
  const reactEl = React.createElement(reactElement, properties);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  response.write('<!DOCTYPE html>');
  response.end(html);
}

module.exports = renderTemplate;
