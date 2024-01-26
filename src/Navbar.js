import React from 'react'
import {useSelector} from 'react-redux';
import {Link, useLocation} from "react-router-dom";
const Navbar = () => {
  const amount = useSelector(state =>state.amount)
  const numberofshares = useSelector(state =>state.numb);
  let location =useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand navbar-warning bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Mini Stock Market</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Money</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Share"?"active":""}`} to="/Share">Shares</Link>
              </li>
             
            </ul>
            <div>
              <button className="btn btn-light mx-2 " >Your Shares: {numberofshares}</button>
            </div>
            <div>
              <button className="btn btn-dark" >Your Wallet: ${amount}</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
