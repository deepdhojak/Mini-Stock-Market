import React from 'react'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'
import { useDispatch ,useSelector} from 'react-redux';

const Money = () => {
  
    const dispatch = useDispatch();
    const balance = useSelector(state =>state.amount);
  
    const {withdrawMoney,depositMoney } = bindActionCreators(actionCreators,dispatch);
  
    return (
      <div className="container" >
        <div className="container my-4 mt-4">
            <div className="container d-flex">
                <h1 className="mx-auto" style={{ width: '275px'}}>WITHDRAW</h1>
               <h1 className="mx-auto" style={{ width: '195px'}}>DEPOSIT</h1>
            </div>
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className=" btn-group-vertical  rounded-circle mx-auto my-2" style={{ width: '55px'}}>
        <button disabled={balance<1?true:false} className="btn btn-outline-danger rounded-circle btn-sm " onClick={()=>(withdrawMoney(1))} >-$1</button>
        <button disabled={balance<2?true:false} className=" btn btn-outline-danger rounded-circle " onClick={()=>(withdrawMoney(2))} >-$2</button>
        <button disabled={balance<5?true:false} className=" btn btn-outline-danger rounded-circle  " onClick={()=>(withdrawMoney(5))} >-$5</button>
        <button disabled={balance<10?true:false} className="btn btn-outline-danger rounded-circle " onClick={()=>(withdrawMoney(10))}>-$10</button>

         </div> 
         
         <div className=" btn-group-vertical rounded-circle mx-auto my-2 " style={{ width: '55px'}}>
        <button className=" btn btn-outline-success rounded-circle  btn-sm" onClick={()=>(depositMoney(1))} >+$1</button>
        <button className=" btn btn-outline-success rounded-circle " onClick={()=>(depositMoney(2))} >+$2</button>
        <button className="btn btn-outline-success rounded-circle " onClick={()=>(depositMoney(5))} >+$5</button>
        <button className=" btn btn-outline-success rounded-circle " onClick={()=>(depositMoney(10))}>+$10</button>

         </div>

         {/* Updated Wallet ({balance}) */}
        </div>
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

        <div className=" btn-group-vertical  mx-auto my-0" style={{ width: '80px'}}>
        <button disabled={balance<50?true:false} className="btn btn-outline-danger  rounded-0   " onClick={()=>(withdrawMoney(50))} >-$50</button>
        <button disabled={balance<100?true:false} className="btn btn-outline-danger rounded-0  " onClick={()=>(withdrawMoney(100))} >-$100</button>
        <button disabled={balance<200?true:false} className="btn btn-outline-danger rounded-0  " onClick={()=>(withdrawMoney(200))} >-$200</button>
        <button disabled={balance<500?true:false} className="btn btn-outline-danger rounded-0 btn btn-lg" onClick={()=>(withdrawMoney(500))}>-$500</button>

         </div>
         <div className="btn-group-vertical mx-auto my-0" style={{ width: '80px'}}>
        <button className="btn btn-outline-success rounded-0   " onClick={()=>(depositMoney(50))} >+$50</button>
        <button className="btn btn-outline-success rounded-0  " onClick={()=>(depositMoney(100))} >+$100</button>
        <button className="btn btn-outline-success rounded-0  " onClick={()=>(depositMoney(200))} >+$200</button>
        <button className="btn btn-outline-success rounded-0  btn btn-lg" onClick={()=>(depositMoney(500))}>+$500</button>

         </div>
        </div>
        </div>
      </div>
  )
}

export default Money


