import exampleState from './example.state'

const example = {
  namespace: 'example',
  state: exampleState,
  reducers: {
    SET_STATE: (state: any, action: { payload: any }) => ({ ...state, ...action.payload })
  },
  effects: {},
  subscriptions: {}
}

export default example
