import React,{useState} from 'react'

function IncDec({qtyModify,id}) {
    const [count,setCount]= useState(1);


  return (
  <>
    <div>
     <button onClick={() => {setCount(count - 1)
    qtyModify(id,-1)
    }} 
    
    disabled={count===1} >-</button>
     <button>{count}</button>
     < button onClick={() => {setCount(count + 1)
    qtyModify(id,1)
    }}>
       +</button>
    </div>
  </>
  )
}

export default IncDec
