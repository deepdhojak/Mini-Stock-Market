const  reducer = (state=0, action)=>{
  if(action.type==='gsell'){
    return state - action.payload
  }
  else  if(action.type==='gbuy'){
    return state + action.payload
  }
  else{
    return state;
  }
}
export default reducer