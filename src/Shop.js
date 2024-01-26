import React from 'react'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'
import { useDispatch ,useSelector} from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state =>state.amount);
  const numberofshares = useSelector(state =>state.numb);

  const {withdrawMoney,depositMoney,buyshare, sellshare } = bindActionCreators(actionCreators,dispatch);

  return (
    <div className="container" >
      <div className="container mb-2">
      <h2>Deposit/Withdraw Money</h2>
      <button disabled={balance<100?true:false} className="btn btn-primary mx-2 " onClick={()=>(withdrawMoney(100))} >-</button>
        Updated Balance ({balance})
      <button className="btn btn-primary mx-2  " onClick={()=>(depositMoney(100))}>+</button>
      </div>
      <div className="container my-2 mt-4">
      <h2>Sell/Buy Shares</h2>
      <button disabled={balance<50?true:false} className="btn btn-danger mx-2 " onClick={()=>(withdrawMoney(50),buyshare(1))} >Buy</button>
        Current Shares ({numberofshares})
      <button disabled={!numberofshares?true:false} className="btn btn-success mx-2" onClick={()=>(depositMoney(150),sellshare(1))}>Sell</button>
      </div>
    </div>
    
  )
}

export default Shop
