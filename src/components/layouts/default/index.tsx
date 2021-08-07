import React from 'react'
import { withRouter } from 'react-router'

const LayoutDefault = ({ children }: any) => {
  return <>{children}</>
}

export default withRouter(LayoutDefault)
