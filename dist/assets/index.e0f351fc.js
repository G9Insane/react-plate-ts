import { D as e, R as t, a } from './vendor.1f3c1783.js'
function l() {
  const [a, l] = e.exports.useState(0)
  return t.createElement(
    'div',
    { className: 'App' },
    t.createElement(
      'header',
      { className: 'App-header' },
      t.createElement('img', {
        src: './assets/logo.70aa190a.svg',
        className: 'App-logo',
        alt: 'logo'
      }),
      t.createElement('p', null, 'Hello Gal + Lang!'),
      t.createElement(
        'p',
        null,
        t.createElement(
          'button',
          { type: 'button', onClick: () => l((e) => e + 1) },
          'click me: ',
          a
        )
      ),
      t.createElement(
        'p',
        null,
        'Edit ',
        t.createElement('code', null, 'App.tsx'),
        ' and save to test HMR updates.'
      ),
      t.createElement(
        'p',
        null,
        t.createElement(
          'a',
          {
            className: 'App-link',
            href: 'https://reactjs.org',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'Learn React'
        ),
        ' | ',
        t.createElement(
          'a',
          {
            className: 'App-link',
            href: 'https://vitejs.dev/guide/features.html',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'Vite Docs'
        )
      )
    )
  )
}
a.render(
  t.createElement(t.StrictMode, null, t.createElement(l, null)),
  document.getElementById('root')
)
