import React, { useEffect, useState } from 'react';
import { Link ,useSearchParams} from "react-router-dom";
// import { AutoContext } from '../Context/AutoContextProvider';
import styles from "./styles.module.css"

const getParamUrl=(value)=>
{
  value= +(value)
  
  if(value==='number' && value <0)
  {
    return value=1
  } else if(!value)
  {
    return value=1
  }
  return value;
}


function Products() {
  const [searchparam,setSearchparam]= useSearchParams()
  const [products, setProducts] = useState([]);
  const [page,setpage]=useState(getParamUrl(searchparam.get('page'))||1);
  const [total, setTotal] = useState(1)

  const getData = async (page) => {
    try {
      // let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=8`)
       let res= await fetch(`http://localhost:308/api/data?_page=${page}&_limit=8`)
      let fetchData = await res.json()
      setProducts(fetchData)
      setTotal(fetchData.totalPages)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(page)
  }, [page])

  // console.log(products);
  
  useEffect(()=>{
   
    let param={page}
    setSearchparam(param)
  },[page])

  console.log(products.data);

  const stylesMain =
  {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    width: "90%",
    gap: '10px',
    margin: " 20px auto",
    // marginTop:'20px'
  }

  const childDiv =
  {
    width: '95%',
    height: '50vh',
    margin: '3%',
    borderRadius: '2%',
    boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    textAlign:'center'
  }

  const childDivImg =
  {
    width: '100%',
    height: '30vh',
    borderRadius: '3% 3% 0% 0%',
  }

  const MoreButton =
  {
    width: '90%',
    height: '8%',
    textTransform:'uppercase',
    cursor:'pointer',
    backgroundColor:'blue',
    outline:'none',
    border:'none',
    color:'white',
   borderRadius: '3%',
  }

  const PaginationStyle=
  {
    width:"30%",
    margin:'auto',
    // border:'1px solid red'
  }

    // const {isAuto}= useContext(AutoContext)

    // if(isAuto)
    // {
    //   return <Navigate to='/signin'/>
    // }
  return (
    <>
      <h1 style={{textAlign:'center'}}>Latest Products</h1>
      <hr className={styles.hr} />
      <div style={stylesMain}>
       
       {
        products && products.map((el)=>(

          <div key={el.id} style={childDiv}>
            <img src={el.image} alt={el.title} style={childDivImg}></img>
            <p style={{ textAlign: 'center' }}> {el.title}</p>
            <p style={{ textAlign: 'center', fontSize: '22px', marginTop: '-3%' }}>Price : {el.price} </p>
            <Link to={`/products/${el.id}`}><button style={MoreButton}> More Details </button>  </Link>
          </div>
        ))
       }
      </div>

      <div style={PaginationStyle}>
        <button onClick={() => setpage(page - 1)} disabled={page === 1} style={{margin:'5%',padding:'2% 5%', cursor:'pointer'}}>PREV</button>
        <button style={{margin:'5%',padding:'2% 8%'}}>{page}</button>
        <button onClick={() => setpage(page + 1)} disabled={page === total} style={{margin:'5%',padding:'2% 5%',cursor:'pointer'}}>NEXT</button>
      </div>

    </>


  )
}

export default Products
