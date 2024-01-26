import React from 'react'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'
import { useDispatch, useSelector } from 'react-redux';
const Share = (props) => {

  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
  const numberofshares = useSelector(state => state.numb);
  const MetaShares = useSelector(state => state.Meta);
  const AmazonShares = useSelector(state => state.Amazon);
  const AppleShares = useSelector(state => state.Apple);
  const NetflixShares = useSelector(state => state.Netflix);
  const GoogleShares = useSelector(state => state.Google);
  const needmore = (need) =>{
    let num = parseInt(need)
    return num ;
  }


  const { withdrawMoney, depositMoney, buyshare, sellshare, buymeta, sellmeta, buyamazon, sellamazon, buyapple, sellapple, buynetflix, sellnetflix, buygoogle, sellgoogle } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="container" >

      <div className="container my-4  mt-4">

        <h1 className="text-center" >BUY / SELL</h1>
        {/* <p className="mx-auto my-1" style={{width: '190px'}} >     Current Shares ({numberofshares})</p> */}
        <div className="mx-auto my-2" style={{ width: '199px' }}>
          <div className="btn-group btn-group-lg" role="group" >
            <button  className="btn btn-danger mx-2 " onClick={() => !(balance < 50 )?(withdrawMoney(50), buymeta(1), buyshare(1), props.showAlert("Bought for $50 !", "success")):props.showAlert( `Need $${50-balance} more to buy this Share!` , "danger")
            } >Meta</button>
            <button disabled={!MetaShares ? true : false} className="btn btn-success mx-2" onClick={() => (depositMoney(150), sellmeta(1), sellshare(1), props.showAlert("Sold at $150 !", "success"))}>Meta ({MetaShares})</button>
          </div>
        </div>
        <div className="mx-auto my-2" style={{ width: '252px' }}>
          <div className="btn-group btn-group-lg" role="group" >
            <button  className="btn btn-danger mx-2 " onClick={() =>!(balance < 200 )?(withdrawMoney(200), buyamazon(1), buyshare(1), props.showAlert("Bought for $200 !", "success")):props.showAlert( `Need $${200-balance} more to buy this Share!`, "danger")
            } >Amazon</button>
            <button disabled={!AmazonShares ? true : false} className="btn btn-success mx-2" onClick={() => (depositMoney(250), sellamazon(1), sellshare(1), props.showAlert("Sold at $250 !", "success"))}>Amazon ({AmazonShares})</button>
          </div>
        </div>
        <div className="mx-auto my-2" style={{ width: '210px' }}>
          <div className="btn-group btn-group-lg" role="group" >
            <button  className="btn btn-danger mx-2 " onClick={() => !(balance < 400 )?(withdrawMoney(400), buyapple(1), buyshare(1), props.showAlert("Bought for $400 !", "success")):props.showAlert( `Need $${400-balance} more to buy this Share!` , "danger")
            } >Apple</button>
            <button disabled={!AppleShares ? true : false} className="btn btn-success mx-2" onClick={() => (depositMoney(250), sellapple(1), sellshare(1), props.showAlert("Sold at $250 !", "success"))}>Apple ({AppleShares})</button>
          </div>
        </div>
        <div className="mx-auto my-2" style={{ width: '212px' }}>
          <div className="btn-group btn-group-lg" role="group" >
            <button  className="btn btn-danger mx-2 " onClick={() => !(balance < 150 )?(withdrawMoney(150), buynetflix(1), buyshare(1), props.showAlert("Bought for $150 !", "success")):props.showAlert( `Need $${150-balance} more to buy this Share!` , "danger")
            } >Netfix</button>
            <button disabled={!NetflixShares ? true : false} className="btn btn-success mx-2" onClick={() => (depositMoney(200), sellnetflix(1), sellshare(1), props.showAlert("Sold at $200 !", "success"))}>Netflix ({NetflixShares})</button>
          </div>
        </div>
        <div className="mx-auto my-2" style={{ width: '235px' }}>
          <div className="btn-group btn-group-lg" role="group" >
            <button  className="btn btn-danger mx-2 " onClick={() => !(balance < 250 )?(withdrawMoney(250), buygoogle(1), buyshare(1), props.showAlert("Bought for $250 !", "success")):props.showAlert( `Need $${250-balance} more to buy this Share!` , "danger")
            } >Google</button>
            <button disabled={!GoogleShares ? true : false} className="btn btn-success mx-2" onClick={() => (depositMoney(350), sellgoogle(1), sellshare(1), props.showAlert("Sold at $350 !", "success"))}>Google ({GoogleShares})</button>
          </div>
        </div>
      </div>




    </div>

  )

}

export default Share
