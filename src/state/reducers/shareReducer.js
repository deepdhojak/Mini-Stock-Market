const  reducer = (state=0, action)=>{
  if(action.type==='esell'){
    return state - action.payload
  }
  else  if(action.type==='ebuy'){
    return state + action.payload
  }
  else{
    return state;
  }
}
export default reducer