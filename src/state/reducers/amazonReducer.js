const  reducer = (state=0, action)=>{
  if(action.type==='asell'){
    return state - action.payload
  }
  else  if(action.type==='abuy'){
    return state + action.payload
  }
  else{
    return state;
  }
}
export default reducer