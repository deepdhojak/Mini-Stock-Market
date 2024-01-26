const  reducer = (state=0, action)=>{
  if(action.type==='nsell'){
    return state - action.payload
  }
  else  if(action.type==='nbuy'){
    return state + action.payload
  }
  else{
    return state;
  }
}
export default reducer