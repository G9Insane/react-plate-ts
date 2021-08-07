import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { LayoutAuth, LayoutDefault } from '@/components/layouts'

const routes = [
  {
    path: '/login',
    Component: lazy(() => import('@/pages/login')),
    exact: true,
    Layout: LayoutAuth
  },
  {
    path: '/example',
    Component: lazy(() => import('@/pages/example')),
    exact: true,
    Layout: LayoutDefault
  }
]

const Router = ({ history }: any) => {
  return (
    <ConnectedRouter history={history}>
      <Route
        render={(state) => {
          const { location } = state
          return (
            <Switch location={location}>
              <Route exact path="/" render={() => <Redirect to="/example" />} />
              {routes.map(({ path, Component, exact, Layout }) => (
                <Route
                  path={path}
                  key={path}
                  exact={exact}
                  render={() => (
                    <Suspense fallback={null}>
                      <Layout>
                        <Component />
                      </Layout>
                    </Suspense>
                  )}
                />
              ))}
              <Redirect to="/auth/404" />
            </Switch>
          )
        }}
      />
    </ConnectedRouter>
  )
}

export default Router
