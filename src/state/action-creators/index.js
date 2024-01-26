export const depositMoney = (amount) =>{
  return (dispatch)=>{
    dispatch({
      type: 'deposit',
      payload: amount
    })
  }
}

export const withdrawMoney = (amount) =>{
  return (dispatch)=>{
    dispatch({
      type: 'withdraw',
      payload: amount
    })

}
}

export const buyshare = (numb) =>{
  return (dispatch)=>{
    dispatch({
      type: 'ebuy',
      payload: numb
    })
  }
}

export const sellshare = (numb) =>{
  return (dispatch)=>{
    dispatch({
      type: 'esell',
      payload: numb
    })
  }
}

export const buymeta = (Meta) =>{
  return (dispatch)=>{
    dispatch({
      type: 'mbuy',
      payload: Meta
    })
  }
}

export const sellmeta = (Meta) =>{
  return (dispatch)=>{
    dispatch({
      type: 'msell',
      payload: Meta
    })
  }
}

export const buyamazon = (Amazon) =>{
  return (dispatch)=>{
    dispatch({
      type: 'abuy',
      payload: Amazon
    })
  }
}

export const sellamazon = (Amazon) =>{
  return (dispatch)=>{
    dispatch({
      type: 'asell',
      payload: Amazon
    })
  }
}
export const buyapple = (Apple) =>{
  return (dispatch)=>{
    dispatch({
      type: 'apbuy',
      payload: Apple
    })
  }
}

export const sellapple = (Apple) =>{
  return (dispatch)=>{
    dispatch({
      type: 'apsell',
      payload: Apple
    })
  }
}
export const buynetflix = (Netflix) =>{
  return (dispatch)=>{
    dispatch({
      type: 'nbuy',
      payload: Netflix
    })
  }
}

export const sellnetflix = (Netflix) =>{
  return (dispatch)=>{
    dispatch({
      type: 'nsell',
      payload: Netflix
    })
  }
}

export const buygoogle = (Google) =>{
  return (dispatch)=>{
    dispatch({
      type: 'gbuy',
      payload: Google
    })
  }
}

export const sellgoogle = (Google) =>{
  return (dispatch)=>{
    dispatch({
      type: 'gsell',
      payload: Google
    })
  }
}

