const  reducer = (state=0, action)=>{
  if(action.type==='msell'){
    return state - action.payload
  }
  else  if(action.type==='mbuy'){
    return state + action.payload
  }
  else{
    return state;
  }
}
export default reducer