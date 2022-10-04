const INITIAL_STATE = {
  name:'',
  location:'',
  phoneNumber:'',
  picture:''
  };
  
  const randomUserReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
  
    switch(type) {
      case 'SET_RANDOMUSER_STATE':
        return {
          ...state,
          ...payload
        };
      case 'RESET_RANDOMUSER_STATE':
        return {
          ...INITIAL_STATE
        };
      default:
        return state;
    }
  };
  
  export default randomUserReducer;