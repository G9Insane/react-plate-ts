const exampleReducers = {
  SET_STATE: (state: any, action: any) => ({ ...state, ...action.payload })
}

export default exampleReducers
