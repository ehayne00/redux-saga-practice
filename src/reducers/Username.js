const usernameReducer = (state = null, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default usernameReducer;
  
  //this reducer is purely for example purposes, to show how to deal with multiple 
  //reducers being combined in an index.js reducer to be called as arg in createStore()