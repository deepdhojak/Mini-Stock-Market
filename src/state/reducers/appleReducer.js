const  reducer = (state=0, action)=>{
  if(action.type==='apsell'){
    return state - action.payload
  }
  else  if(action.type==='apbuy'){
    return state + action.payload
  }
  else{
    return state;
  }
}
export default reducer